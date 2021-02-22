const axios = require('axios');
const logger = require('../utils/logs/Logger');

var loteria;


const api = {
    urlUltimoJogo:'http://loterias.caixa.gov.br/wps/portal/loterias/landing/megasena/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOLNDH0MPAzcDbwMPI0sDBxNXAOMwrzCjA0sjIEKIoEKnN0dPUzMfQwMDEwsjAw8XZw8XMwtfQ0MPM2I02-AAzgaENIfrh-FqsQ9wNnUwNHfxcnSwBgIDUyhCvA5EawAjxsKckMjDDI9FQE-F4ca/dl5/d5/L2dBISEvZ0FBIS9nQSEh/pw/Z7_HGK818G0KO6H80AU71KG7J0072/res/id=buscaResultado/',
    urlJogoEspecifico:'http://loterias.caixa.gov.br/wps/portal/loterias/landing1/megasena/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOLNDH0MPAzcDbwMPI0sDBxNXAOMwrzCjA0sjIEKIoEKnN0dPUzMfQwMDEwsjAw8XZw8XMwtfQ0MPM2I02-AAzgaENIfrh-FqsQ9wNnUwNHfxcnSwBgIDUyhCvA5EawAjxsKckMjDDI9FQE-F4ca/dl5/d5/L2dBISEvZ0FBIS9nQSEh/pw/Z7_HGK818G0KO6H80AU71KG7J0072/res/id=buscaResultado//p=concurso=',
    Cookies:"security=true; Path=/; Domain=loterias.caixa.gov.br"

}
class MegaSenaApiGateway{
    ultimoConcurso(){
        return axios.get(api.urlUltimoJogo.toString(), {
            headers:{ 
                Cookie: api.Cookies.toString() 
            }
        }).then(response => {
                return  response.data
            })
            .catch(err => {
                logger.loggerError(err)
            })
    }
    async concursoPorIntervalo(numero){
        let ultimoConcurso = await this.ultimoConcurso();
        var numeroConcurso = ultimoConcurso.numero;
        let ultimosNumerosConcursos = [];
        for(var i=0;i<numero;i++){
            var novaUrl = api.urlJogoEspecifico.toString()+numeroConcurso;
            let number = await this.concursoEspecifico(novaUrl)
            ultimosNumerosConcursos.push(number)
            numeroConcurso--
        }
        return ultimosNumerosConcursos;
    }

    concursoEspecifico(url){
        logger.loggerDebug(url, "URL de consulta especifico: ")
        return axios.get(url,{
            headers:{
                Cookie : api.Cookies.toString()
            }
        }).then(response =>{
            logger.loggerDebug(response.data.listaDezenas, "Dezenas Sorteadas em "+response.data.dataApuracao+":")
            return response.data;
        }).catch(err=>{
            logger.loggerError(err);
        })
    }
}

module.exports = new MegaSenaApiGateway();
