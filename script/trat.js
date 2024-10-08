
const trat_dental = document.querySelectorAll("#trat-dental");
const modal_dental = document.querySelector("#dental_container");


trat_dental.forEach(tratamento => {
    tratamento.onclick = () => {
        let selectedTratamentos = tratamento.dataset.treatment;

        modal_dental.querySelector("img").src = tratamentos_modal_info[selectedTratamentos].img;
        modal_dental.querySelector("h2").innerHTML = tratamentos_modal_info[selectedTratamentos].title;
        modal_dental.querySelector("p").innerHTML = tratamentos_modal_info[selectedTratamentos].text;


        modal_dental.dataset.active = "true"

        console.log('funcionando')


       
        trat_dental.forEach(div => div.dataset.active = "false");
    
        if (tratamento.dataset.active === 'false') {

            tratamento.dataset.active = 'true';
            modal_dental.dataset.active = 'true';

        } else {

            tratamento.dataset.active = 'false';
            modal_dental.dataset.active = 'false';
            
        }

    }
})


const tratamentos_modal_info = {
    clinica: {
        img: "./assets/img-trat/clinica-geral.webp",
        title: "Clínica Geral",
        text: "A Clínica Geral fornece um amplo leque de procedimentos voltados para a prevenção odontológica. Isso inclui exames clínicos e radiográficos minuciosos, essenciais para um diagnóstico preciso das condições bucais. Além disso, são realizadas profilaxias específicas que desempenham um papel fundamental na preservação da saúde bucal do paciente, garantindo-lhe bem-estar e qualidade de vida.",
    },
    ortodontia: {
        img: "./assets/img-trat/ortodontia.webp",
        title: "Ortodontia",
        text: "A ortodontia é uma especialidade odontológica que se dedica ao estudo e tratamento das irregularidades dentárias e das disfunções relacionadas à mordida. Por meio de aparelhos fixos ou removíveis, como os famosos aparelhos dentários, a ortodontia busca alinhar os dentes e corrigir problemas de má oclusão, proporcionando um sorriso mais estético e funcional.",
    },
    implantodontia: {
        img: "./assets/img-trat/implantes.webp",
        title: "Implantodontia",
        text: "A implantodontia é uma especialidade odontológica que visa substituir dentes ausentes por implantes dentários de titânio. Esses implantes funcionam como raízes artificiais, permitindo a colocação de próteses fixas ou removíveis. Com tecnologia avançada, proporciona resultados estéticos e funcionais, melhorando a qualidade de vida dos pacientes.",
    },
    periodontia: {
        img: "./assets/img-trat/periodontia.webp",
        title: "Periodontia",
        text: "A periodontia é uma especialidade odontológica que se dedica ao diagnóstico e tratamento das doenças que afetam os tecidos de suporte dos dentes, como a gengiva e o osso alveolar. Com técnicas avançadas, busca prevenir e tratar a gengivite e a periodontite, visando a saúde bucal e a preservação dos dentes, proporcionando um sorriso saudável e duradouro.",
    },
    endodontia: {
        img: "./assets/img-trat/endodontia.webp",
        title: "Endodontia",
        text: "A endodontia é uma especialidade odontológica voltada para o tratamento do canal radicular, localizado no interior do dente. Por meio de técnicas avançadas, o endodontista realiza a remoção da polpa dental infectada ou inflamada, promovendo a desinfecção e o preenchimento adequado do canal. Esse procedimento visa salvar o dente e aliviar a dor, restaurando a saúde bucal do paciente.",
    },
    lentes: {
        img: "./assets/img-trat/lentes.webp",
        title: "Lentes de Contato Dentais",
        text: "As lentes de contato dentais são finas camadas de porcelana ou resina colocadas sobre os dentes para melhorar a sua aparência estética. Elas corrigem imperfeições como manchas, desalinhamentos e espaçamentos, proporcionando um sorriso harmonioso e natural. São duráveis, personalizadas e exigem pouco desgaste dental.",
    },
    proteses: {
        img: "./assets/img-trat/proteses.webp",
        title: "Próteses Dentárias",
        text: "As próteses dentárias são dispositivos customizados que substituem dentes ausentes, restaurando a função e a estética bucal. Podem ser parciais, completas ou fixas, confeccionadas com materiais duráveis e seguros. Além de melhorar a mastigação e a fala, as próteses promovem a autoconfiança, o sorriso saudável e a qualidade de vida dos pacientes.",
    },
    clareamento: {
        img: "./assets/img-trat/clareamento.webp",
        title: "Clareamento Dental",
        text: "O clareamento dental é um procedimento estético que visa clarear a tonalidade dos dentes, removendo manchas e proporcionando um sorriso mais branco e radiante. Realizado por meio de géis clareadores aplicados nos dentes, pode ser feito em consultório ou em casa, sob orientação profissional. O clareamento dental contribui para a melhoria da autoestima e confiança do paciente.",
    },

    /** estetica */
    bichectomia: {
        img: "./assets/img-trat/bichectomia.webp",
        title: "Bichectomia",
        text: "A bichectomia é um procedimento estético que envolve a remoção parcial ou total das bolas de Bichat, que são pequenas porções de gordura localizadas nas bochechas. Esse procedimento visa afinar o rosto e acentuar os contornos faciais, promovendo uma aparência mais esculpida e harmoniosa. É considerado relativamente simples, com recuperação rápida e resultados duradouros, proporcionando um efeito estético que realça a definição do rosto.",
    },
    toxina: {
        img: "./assets/img-trat/toxina.webp",
        title: "Toxina Botulínica",
        text: "A toxina botulínica é uma substância utilizada para diversos fins estéticos e terapêuticos. Com propriedades relaxantes musculares, é aplicada de forma segura para suavizar rugas e linhas de expressão. Além disso, também é utilizada em tratamentos odontológicos, como no controle do bruxismo e em casos de sorriso gengival excessivo.",
    },
}
