// Model
var bio = {
	name: "Douglas Kira Muraoka",
	role: "Full-Stack Web Developer",
	contacts: {
		mobile: "+55 12 98825-7080",
		email: "douglas.muraoka@gmail.com",
		twitter: "@douglasmuraoka",
		github: "douglasmuraoka",
		location: "São José dos Campos, São Paulo, Brazil"
	},
	biopic: "http://i.imgur.com/WBxh6M4.jpg",
	welcomeMessage: "Hello Javascript templating world :)",
	skills: ["Java", "Spring Framework", "Hibernate", "HTML", "CSS", "JavaScript"],
	display: function () {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

		var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		$("#header").append(bioPic);
		$("#header").append(welcomeMessage);

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (skill in bio.skills) {
				$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
			}
		}


		var contactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var contactEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var contactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var contactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var contactLocation = HTMLlocation.replace("%data%", bio.contacts.location);

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
	jobs: [
		{
			employer: "Touch Health",
			title: "Full-Stack Web Developer",
			location: "São José dos Campos, São Paulo, Brazil",
			dates: "2014-Current",
			description: "Development of Java web applications for health industry."
		},
		{
			employer: "Touch Health",
			title: "Software Developer Intern",
			location: "São Paulo, São Paulo, Brazil",
			dates: "2012-2014",
			description: "Software intern, development of PDF and XLS/XLSX dynamic document generator"
		}
	],
	display: function () {
		if (work.jobs.length > 0) {
			for (j in work.jobs) {
				$("#workExperience").append(HTMLworkStart);
				var job = work.jobs[j];
				var employer = HTMLworkEmployer.replace("%data%", job.employer)
				var title = HTMLworkTitle.replace("%data%", job.title);
				$(".work-entry:last").append(employer + title);
				$(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
				$(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
				$(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
			}
		}
	}
};

var projects = {
	projects : [
		{
			title: "Scheduler Rede D'Or São Luiz",
			dates: "2016 - Current",
			description: "Enterprise integration patterns",
			images: ["https://visualhunt.com/photos/l/1/stethoscope-and-ballpen-on-prescription.jpg"]
		},
		{
			title: "DokYou",
			dates: "2012 - Current",
			description: "PDF and XLS/XLSX dynamic document generator",
			images: ["https://visualhunt.com/photos/l/1/laptop-with-mouse-and-mug-on-documents.jpg"]
		}
	],
	display : function () {
		for (p in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var project = projects.projects[p];
			var title = HTMLprojectTitle.replace("%data%", project.title);
			var dates = HTMLprojectDates.replace("%data%", project.dates);
			var description = HTMLprojectDescription.replace("%data%", project.description);
			$(".project-entry:last").append(title);
			$(".project-entry:last").append(dates);
			$(".project-entry:last").append(description);
			for (i in project.images) {
				var image = HTMLprojectImage.replace("%data%", project.images[i]);
				$(".project-entry:last").append(image);
			}
		}
	}
}

var education = {
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
	],
	display: function () {
		for (s in education.schools) {
			var school = education.schools[s];
			$("#education").append(HTMLschoolStart);
			var name = HTMLschoolName.replace("%data%", school.name);
			var degree = HTMLschoolDegree.replace("%data%", school.degree);
			$(".education-entry:last").append(name + degree);
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
			for (m in school.majors) {
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors[m]));
			}
		}

		if (education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);
			for (c in education.onlineCourses) {
				var course = education.onlineCourses[c];
				var title = HTMLonlineTitle.replace("%data%", course.title);
				var school = HTMLonlineSchool.replace("%data%", course.school);
				$(".education-entry:last").append(title + school);
				$(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
				$(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));
			}
		}
	}
}

// Page initialization
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
