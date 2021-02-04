    
const MegaSenaApiGateway = require('./gateway/MegaSenaApiGateway')



const date = new Date();

const api = {
    urlUltimoJogo:'http://loterias.caixa.gov.br/wps/portal/loterias/landing/megasena/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOLNDH0MPAzcDbwMPI0sDBxNXAOMwrzCjA0sjIEKIoEKnN0dPUzMfQwMDEwsjAw8XZw8XMwtfQ0MPM2I02-AAzgaENIfrh-FqsQ9wNnUwNHfxcnSwBgIDUyhCvA5EawAjxsKckMjDDI9FQE-F4ca/dl5/d5/L2dBISEvZ0FBIS9nQSEh/pw/Z7_HGK818G0KO6H80AU71KG7J0072/res/id=buscaResultado/',
    urlJogoEspecifico:'http://loterias.caixa.gov.br/wps/portal/loterias/landing1/megasena/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOLNDH0MPAzcDbwMPI0sDBxNXAOMwrzCjA0sjIEKIoEKnN0dPUzMfQwMDEwsjAw8XZw8XMwtfQ0MPM2I02-AAzgaENIfrh-FqsQ9wNnUwNHfxcnSwBgIDUyhCvA5EawAjxsKckMjDDI9FQE-F4ca/dl5/d5/L2dBISEvZ0FBIS9nQSEh/pw/Z7_HGK818G0KO6H80AU71KG7J0072/res/id=buscaResultado//p=concurso=',
    Cookies:"security=true; Path=/; Domain=loterias.caixa.gov.br"

}

console.log(`
    ###############################################
    ##     DATA E HORA DO INICIO DO PROCESSO     ##
    ###############################################
        
`+new Date());


console.log(`
    ###############################################
    ##    Link de acesso ao jogo da megasena     ##
    ###############################################
    
`+api.urlUltimoJogo);

console.log(`
    ###############################################
    ##   Informações do sorteio da mega-sena     ##
    ###############################################

`);

const loteria = MegaSenaApiGateway.ultimoConcurso(api.urlUltimoJogo, api.Cookies)

console.log(loteria)
console.log(`
    ###############################################
    ##     DATA E HORA DO FIM    DO PROCESSO     ##
    ###############################################
        
    `+new Date());



module.exports;