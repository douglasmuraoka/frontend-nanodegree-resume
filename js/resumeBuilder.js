// Model
var labels = {
	en: {
		workExperience: "Work Experience",
		projects: "Projects",
		education: "Education",
		major: "Major",
		livedAndWorked: "Where I've Lived and Worked",
		connect: "Let's Connect",
		location: "location"
	},
	pt: {
		workExperience: "Experiência de Trabalho",
		projects: "Projetos",
		education: "Educação",
		major: "Area",
		livedAndWorked: "Onde Morei e Trabalhei",
		connect: "Vamos nos conectar",
		location: "localização"
	},
	display: function (lang) {
		var currentLangLabels = labels[lang];
		$("#workExperience .title").text(currentLangLabels.workExperience);
		$("#projects .title").text(currentLangLabels.projects);
		$("#education .title").text(currentLangLabels.education);
		$("#mapDiv .title").text(currentLangLabels.livedAndWorked);
		$("#lets-connect .title").text(currentLangLabels.connect);
	}
};

var bio = {
	en: {
		name: "Douglas Kira Muraoka",
		role: "Full-Stack Web Developer",
		contacts: {
			mobile: "+55 12 98825-7080",
			email: "douglas.muraoka@gmail.com",
			twitter: "@douglasmuraoka",
			github: "douglasmuraoka",
			location: "São José dos Campos, São Paulo, Brazil"
		}
	},
	pt: {
		name: "Douglas Kira Muraoka",
		role: "Desenvolvedor Web Full-Stack",
		contacts: {
			mobile: "(12) 98825-7080",
			email: "douglas.muraoka@gmail.com",
			twitter: "@douglasmuraoka",
			github: "douglasmuraoka",
			location: "São José dos Campos, São Paulo"
		}
	},
	biopic: "images/profile.jpg",
	display: function (lang) {
		var formattedName = HTMLheaderName.replace("%data%", bio[lang].name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio[lang].role);

		var bioPic = HTMLbioPic.replace("%data%", bio.biopic);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		var contactMobile = HTMLmobile.replace("%data%", bio[lang].contacts.mobile);
		var contactEmail = HTMLemail.replace("%data%", bio[lang].contacts.email);
		var contactTwitter = HTMLtwitter.replace("%data%", bio[lang].contacts.twitter);
		var contactGithub = HTMLgithub.replace("%data%", bio[lang].contacts.github);
		var contactLocation = HTMLlocation.replace("%data%", bio[lang].contacts.location).replace("%location%", labels[lang].location);

		$("#topContactsContainer").prepend(bioPic);
		$("#topContacts").append(contactMobile);
		$("#topContacts").append(contactEmail);
		$("#topContacts").append(contactTwitter);
		$("#topContacts").append(contactGithub);
		$("#topContacts").append(contactLocation);

		$("#footerContacts").append(contactMobile);
		$("#footerContacts").append(contactEmail);
		$("#footerContacts").append(contactTwitter);
		$("#footerContacts").append(contactGithub);
		$("#footerContacts").append(contactLocation);
	}
};

var work = {
	en: {
		jobs: [
			{
				employer: "Touch Health",
				title: "Full-Stack Web Developer",
				location: "São José dos Campos, São Paulo, Brazil",
				dates: "2014 - Present",
				description: "Development of Java web applications for health industry."
			},
			{
				employer: "Touch Health",
				title: "Software Developer Intern",
				location: "São José dos Campos, São Paulo, Brazil",
				dates: "2012 - 2014",
				description: "Software intern, development of PDF and XLS/XLSX dynamic document generator"
			}
		],
	},
	pt: {
		jobs: [
			{
				employer: "Touch Health",
				title: "Desenvolvedor Web Full-Stack",
				location: "São José dos Campos, São Paulo",
				dates: "2014 - Presente",
				description: [
					"Colaborar em uma equipe Scrum pequena, porém muito entrosada e proativa, para melhorar, corrigir bugs " +
					"e implementar novas funcionalidades para múltiplos projetos críticos para a área da saúde.",

					"Desenvolvimento de software com Java 7, Spring Framework, Hibernate, Liquibase, SQL (PostgreSQL & Oracle), " +
					"TDD, e deploy com Apache Tomcat 7.",

					"Desenvolvimento front-end com HTML5, CSS3, AngularJS, JavaScript, jQuery, Bootstrap e JSP.",

					"Revisão de códigos através do Gerrit, automatização via Jenkins, versionamento com Git.",

					"Identificar gargalos utilizando VisualVM, e implementar e otimizar código após analisar relatórios de desempenho gerados.",

					"Implementar rotinas concorrentes para receber e transmitir mensagens de integração para múltiplos sistemas, " +
					"realizar tratamentos de erros e retransmissão de mensagens através do Apache Camel.",

					"Prover suporte durante implantações de projetos, fornecendo soluções em tempo real, permitindo a " +
					"conclusão da implantação com sucesso."
				]
			},
			{
				employer: "Touch Health",
				title: "Estagiário em Desenvolvimento de Software",
				location: "São José dos Campos, São Paulo",
				dates: "2012 - 2014",
				description: [
					"Colaborar em uma pequena equipe Scrum para melhorar, corrigir bugs e implementar novas funcionalidades para " +
					"um framework interno de construção de documentos.",

					"Desenvolvimento de software com Java 7, Spring Framework, Hibernate, Liquibase, SQL (PostgreSQL & Oracle), TDD e " +
					"deploy com Apache Tomcat 7.",
					
					"Desenvolvimento front-end com HTML5, CSS3, JavaScript, jQuery e JSP.",
					
					"Uso de mensageria (Apache ActiveMQ) para assincronamente construir e renderizar arquivos PDF e XLS ou XLSX (Excel).",
					
					"Escrever documentação clara para o desenvolvimento, e para incluir em notas de lançamento e de testes.",

				]
			},
			{
				employer: "Delphi Automotive Systems",
				title: "Analista de Melhorias Contínuas",
				location: "Jambeiro, São Paulo",
				dates: "2011 - 2012",
				description: [
					"Identificar e implementar melhorias de processos administrativos industriais, visando a redução de custos e tempo gasto " +
					"em cada etapa dos processos",

					"Implementar novas funcionalidades e manter código VBA legado, responsável por manipular dados de planilhas para geração " +
					"de relatórios e gráficos dinâmicos",

					"Coletar requisitos de gerentes de setores para arquitetar e implementar novos projetos, além de discutir as soluções adotadas " +
					"sempre que possível para garantir que estavam sendo atentidos todos os requisitos",

					"Prover com sucesso treinamentos de usuários, ensinando-os como usar os novos sistemas implementados, explicando as novas " +
					"funcionalidades e detalhes de usabilidade; e compartilhando conhecimento de negócio, para tirar dúvidas e discutir sobre a " +
					"importância do uso do sistema e todos os seus benefícios"
				]
			}
		],
	},
	display: function (lang) {
		if (work[lang].jobs.length > 0) {
			for (var j = 0; j < work[lang].jobs.length; j++) {
				$("#workExperience").append(HTMLworkStart);
				var job = work[lang].jobs[j];
				var employer = HTMLworkEmployer.replace("%data%", job.employer);
				var title = HTMLworkTitle.replace("%data%", job.title);
				$(".work-entry:last").append(employer + title);
				$(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
				$(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
				$(".work-entry:last").append(HTMLworkDescription);

				for (var d = 0; d < job.description.length; d++) {
					$(".work-description:last").append(HTMLjobDescription.replace("%data%", job.description[d]));
				}
			}
		}
	}
};

var projects = {
	en: {
		projects : [
			{
				title: "Scheduler Rede D'Or São Luiz",
				dates: "2016 - Current",
				description: "Enterprise integration patterns",
				images: ["images/stethoscope-and-ballpen-on-prescription.jpg"]
			},
			{
				title: "DokYou",
				dates: "2012 - Current",
				description: "PDF and XLS/XLSX dynamic document generator",
				images: ["images/laptop-with-mouse-and-mug-on-documents.jpg"]
			}
		]
	},
	pt: {
		projects : [
			{
				title: "Agendamento Hospital Sírio-Libanês",
				dates: "2017 - Presente",
				description:	"Implementação do projeto de integração de sistema de agendamento de exames médicos com outros sistemas críticos utilizados " +
								"nas unidades do Hospital Sírio-Libanês",
				images: ["images/laptop-with-mouse-and-mug-on-documents.jpg"]
			},
			{
				title: "Portfolio responsivo",
				dates: "2017",
				description:	"Criar um site de portfolio, replicando o design de um mockup em PDF utilizando HTML e CSS. O site deverá ser responsivo, " +
								"ou seja, deverá se adaptar para exibir uma visualização agradável em quaisquer tamanhos de dispositivos.",
				images: ["images/laptop-with-mouse-and-mug-on-documents.jpg"]
			},
			{
				title: "Otimização de desempenho de sites",
				dates: "2017",
				description:	"Projeto realizado durante curso de otimização de desempenho de páginas web, com objetivo de otimizar o caminho de renderização " +
								"crítica (CRP) e eliminar janks que não possibilitam a execução de animações com 60 quadros por segundo (FPS).",
				images: ["images/laptop-with-mouse-and-mug-on-documents.jpg"]
			},
			{
				title: "Agendamento hospitais Rede D'Or São Luiz",
				dates: "2016 - Presente",
				description:	"Implementação e implantação do projeto de integração de sistema de agendamento de exames médicos com sistemas externos de " +
								"atendimento das unidades de hospitais da Rede D'Or São Luiz de São Paulo e Rio de Janeiro",
				images: ["images/stethoscope-and-ballpen-on-prescription.jpg"]
			},
			{
				title: "Whitebox",
				dates: "2015",
				description:	"Implementação de plataforma web de Business Intelligence (BI) para análise de dados rápida e detalhada através de relatórios e " +
								"gráficos multidimensionais altamente customizados em tempo real. Usuários podem organizar suas visualizações em múltiplos " +
								"painéis e compartilhá-los com outros usuários ou grupos de usuários",
				images: ["images/laptop-with-mouse-and-mug-on-documents.jpg"]
			},
			{
				title: "TATCo",
				dates: "2015",
				description:	"Implementação de sistema de monitoramente de atividades de negócio (BAM) que melhora a conscientização dos usuários sobre o " +
								"gerenciamento de urgências e processos em tempo real. É composto por uma interface simples porém eficiente, que permite " +
								"visualizar cada processo de forma customizada",
				images: ["images/laptop-with-mouse-and-mug-on-documents.jpg"]
			},
			{
				title: "DokYou",
				dates: "2012 - Presente",
				description:	"Implementação (main committer) de framework Java para construção e renderização em massa de documentos PDF e XLS ou XLSX (Excel). " +
								"Através do framework, os usuários podem configurar seu próprio layout de documento (margens, tamanho de cabeçalho e rodapé, etc); " +
								"definir conteúdos parciais e dinâmicos (templates) que poderão ser utilizados repetidamente, com variação de seu conteúdo " +
								"de acordo com o contexto corrente; e permite a geração de documentos de forma assíncrona e concorrente",
				images: ["images/laptop-with-mouse-and-mug-on-documents.jpg"]
			}
		]
	},
	display : function (lang) {
		for (var p = 0; p < projects[lang].projects.length; p++) {
			$("#projects").append(HTMLprojectStart);
			var project = projects[lang].projects[p];
			var title = HTMLprojectTitle.replace("%data%", project.title);
			var dates = HTMLprojectDates.replace("%data%", project.dates);
			var description = HTMLprojectDescription.replace("%data%", project.description);
			$(".project-entry:last").append(title);
			$(".project-entry:last").append(dates);
			$(".project-entry:last").append(description);
			// for (var i = 0; i < project.images.length; i++) {
			// 	var image = HTMLprojectImage.replace("%data%", project.images[i]);
			// 	$(".project-entry:last").append(image);
			// }
		}
	}
};

var education = {
	en: {
		schools: [
			{
				name: "Federal University of São Paulo",
				location: "São José dos Campos, São Paulo, Brazil",
				degree: "BSc",
				majors: ["CS"],
				dates: "2008-2013",
				url: "http://www.unifesp.br/",
			}
		],
		onlineCourses : [
			{
				title: "Front-End Web Developer Nanodegree",
				school: "Udacity",
				dates: "2017",
				url: "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001"
			}
		]
	},
	pt: {
		schools: [
			{
				name: "Universidade Federal de São Paulo",
				location: "São José dos Campos, São Paulo",
				degree: "Bacharelado",
				majors: ["Ciências da Computação"],
				dates: "2008 - 2014",
				url: "http://www.unifesp.br/",
				details: [
					"Trabalho de conclusão de curso: Classificação unária na modelagem da distribuição potencial de espécies (machine learning)",
					"Classificada como a melhor universidade brasileira em 2008. Classificada como a sétima melhor universidade brasileira em 2017"
				]
			}
		],
		onlineCourses : [
			{
				title: "Nanodegree Desenvolvedor Web Front-End",
				school: "Udacity",
				dates: "2017 - Presente",
				url: "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001"
			}
		]
	},
	display: function (lang) {
		for (var s = 0; s < education[lang].schools.length; s++) {
			var school = education[lang].schools[s];
			$("#education").append(HTMLschoolStart);
			var name = HTMLschoolName.replace("%data%", school.name);
			var degree = HTMLschoolDegree.replace("%data%", school.degree);
			$(".education-entry:last").append(name + degree);
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
			for (var m = 0; m < school.majors.length; m++) {
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors[m]).replace("%major%", labels[lang].major));
			}

			for (var d = 0; d < school.details.length; d++) {
				$(".education-entry:last").append(HTMLschoolDetail.replace("%data%", school.details[d]));
			}
		}

		if (education[lang].onlineCourses.length > 0) {
			$("#education").append(HTMLschoolStart);
			for (var c = 0; c < education[lang].onlineCourses.length; c++) {
				var course = education[lang].onlineCourses[c];
				var title = HTMLonlineTitle.replace("%data%", course.title);
				var onlineSchool = HTMLonlineSchool.replace("%data%", course.school);
				$(".education-entry:last").append(title + onlineSchool);
				$(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
				$(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));
			}
		}
	}
};

// Page initialization
labels.display(lang);
bio.display(lang);
work.display(lang);
projects.display(lang);
education.display(lang);
$("#mapDiv").append(googleMap);
