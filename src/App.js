import React, { useState, useEffect } from "react";
import {
	Menu,
	X,
	Phone,
	Mail,
	MapPin,
	Calendar,
	Users,
	Award,
	Code,
	Laptop,
	BookOpen,
	Zap,
	ChevronRight,
	Star,
	MessageCircle,
	Send,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	Youtube,
} from "lucide-react";
import "./index.css";

// Image imports
import logo from "./assets/images/2kk.png";
import a1 from "./assets/images/a1.jpg";
import a2 from "./assets/images/a2.jpg";
import aboutBg from "./assets/images/about.png";
import course1 from "./assets/images/course-1.jpg";
import course2 from "./assets/images/course-2.jpg";
import course3 from "./assets/images/course-3.jpg";
import cat4 from "./assets/images/cat-4.jpg";
import sam1 from "./assets/images/sam 1.jpg";
import sam2 from "./assets/images/sam 2.jpg";
import sam8 from "./assets/images/sam 8.jpg";

const KKComputersWebsite = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		course: "",
		message: "",
	});

	const services = [
		{
			icon: <Code className="w-12 h-12 text-blue-600" />,
			title: "IT Training Programs",
			description:
				"Comprehensive courses in programming, web development, data analysis, and emerging technologies.",
			features: [
				"Python & Java",
				"Web Development",
				"Data Science",
				"Mobile Apps",
			],
		},
		{
			icon: <Award className="w-12 h-12 text-green-600" />,
			title: "Professional Certifications",
			description:
				"Industry-recognized certifications to boost your career prospects and technical expertise.",
			features: ["Microsoft Azure", "Google Cloud", "AWS", "CompTIA"],
		},
		{
			icon: <Laptop className="w-12 h-12 text-purple-600" />,
			title: "Final Year Projects",
			description:
				"Expert guidance for academic projects with real-world applications and industry relevance.",
			features: [
				"AI/ML Projects",
				"Web Applications",
				"Mobile Solutions",
				"IoT Systems",
			],
		},
		{
			icon: <Users className="w-12 h-12 text-orange-600" />,
			title: "Digital Awareness",
			description:
				"Community programs promoting digital literacy and technology awareness for all ages.",
			features: [
				"Digital Literacy",
				"Cyber Safety",
				"Online Skills",
				"Tech Workshops",
			],
		},
	];

	const events = [
		{
			title: "Hack The Web 2025",
			date: "March 15-17, 2025",
			description:
				"Annual hackathon bringing together developers, designers, and innovators",
			status: "upcoming",
			participants: "200+ Expected",
		},
		{
			title: "AI Workshop Series",
			date: "February 1-28, 2025",
			description:
				"Monthly workshops on artificial intelligence and machine learning",
			status: "ongoing",
			participants: "50+ Registered",
		},
		{
			title: "Web Development Bootcamp",
			date: "January 20-22, 2025",
			description: "Intensive 3-day bootcamp covering modern web technologies",
			status: "completed",
			participants: "75 Completed",
		},
	];

	const testimonials = [
		{
			name: "Priya Sharma",
			course: "Full Stack Development",
			text: "KK Computers transformed my career! The hands-on approach and expert mentorship helped me land my dream job.",
			rating: 5,
		},
		{
			name: "Rahul Patel",
			course: "Data Science Certification",
			text: "Excellent training quality and real-world projects. Highly recommend for anyone serious about tech careers.",
			rating: 5,
		},
		{
			name: "Anita Desai",
			course: "Final Year Project",
			text: "The team guided me through my AI project step-by-step. Got excellent grades and industry recognition!",
			rating: 5,
		},
	];

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const whatsappMessage = `Hi! I'm interested in ${formData.course}. 
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

		const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
			whatsappMessage
		)}`;
		window.open(whatsappUrl, "_blank");

		setFormData({
			name: "",
			email: "",
			phone: "",
			course: "",
			message: "",
		});
	};

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		const handleScroll = () => {
			const sections = [
				"home",
				"about",
				"services",
				"events",
				"testimonials",
				"contact",
			];
			const currentSection = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});
			if (currentSection) {
				setActiveSection(currentSection);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Navigation */}
			<nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<div className="flex items-center space-x-3">
							<div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
								<Code className="w-8 h-8 text-white" />
							</div>
							<div className="flex items-center">
								<div className="bg-white rounded-lg p-1 shadow-sm flex items-center h-16">
									<img
										src={logo}
										alt="KK Computers Logo"
										className="h-14 w-auto object-contain rounded-lg"
										style={{ background: "white" }}
									/>
								</div>
							</div>
						</div>

						<div className="hidden md:flex items-center space-x-8">
							{[
								"home",
								"about",
								"services",
								"events",
								"testimonials",
								"contact",
							].map((item) => (
								<button
									key={item}
									onClick={() => scrollToSection(item)}
									className={`capitalize font-medium transition-all duration-300 ${
										activeSection === item
											? "text-blue-600 border-b-2 border-blue-600"
											: "text-gray-700 hover:text-blue-600"
									}`}
								>
									{item}
								</button>
							))}
						</div>

						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
						>
							{isMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden bg-white border-t border-gray-200">
						<div className="px-4 py-2 space-y-1">
							{[
								"home",
								"about",
								"services",
								"events",
								"testimonials",
								"contact",
							].map((item) => (
								<button
									key={item}
									onClick={() => scrollToSection(item)}
									className="block w-full text-left px-3 py-2 capitalize font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
								>
									{item}
								</button>
							))}
						</div>
					</div>
				)}
			</nav>

			{/* Hero Section */}
			<section id="home" className="relative pt-16 pb-20 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
						<div className="space-y-8">
							<div className="space-y-4">
								<h1 className="text-5xl lg:text-6xl font-bold leading-tight">
									Empowering
									<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
										{" "}
										Youth{" "}
									</span>
									with IT Skills
								</h1>
								<p className="text-xl text-gray-600 leading-relaxed">
									Transform your future with cutting-edge IT training,
									professional certifications, and hands-on project experience
									at KK Computers.
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-4">
								<button
									onClick={() => scrollToSection("services")}
									className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
								>
									<span>Explore Courses</span>
									<ChevronRight className="w-5 h-5" />
								</button>
								<button
									onClick={() => scrollToSection("events")}
									className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
								>
									Join Events
								</button>
							</div>

							<div className="flex items-center space-x-8 pt-8">
								<div className="text-center">
									<div className="text-3xl font-bold text-blue-600">500+</div>
									<div className="text-gray-600">Students Trained</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-purple-600">50+</div>
									<div className="text-gray-600">Courses Offered</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-green-600">95%</div>
									<div className="text-gray-600">Success Rate</div>
								</div>
							</div>

							{/* Add images here */}
							<div className="flex gap-6 pt-8">
								<img
									src={a1}
									alt="KK Computers Activity 1"
									className="w-48 h-32 object-cover rounded-xl shadow-lg"
								/>
								<img
									src={a2}
									alt="KK Computers Activity 2"
									className="w-48 h-32 object-cover rounded-xl shadow-lg"
								/>
							</div>
						</div>

						<div className="relative">
							<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
								<div className="bg-white rounded-2xl p-6 space-y-4">
									<div className="flex items-center space-x-3">
										<div className="bg-green-100 p-2 rounded-full">
											<BookOpen className="w-6 h-6 text-green-600" />
										</div>
										<span className="font-semibold">
											Live Interactive Classes
										</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="bg-blue-100 p-2 rounded-full">
											<Award className="w-6 h-6 text-blue-600" />
										</div>
										<span className="font-semibold">
											Industry Certifications
										</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="bg-purple-100 p-2 rounded-full">
											<Users className="w-6 h-6 text-purple-600" />
										</div>
										<span className="font-semibold">Expert Mentorship</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="bg-orange-100 p-2 rounded-full">
											<Zap className="w-6 h-6 text-orange-600" />
										</div>
										<span className="font-semibold">Hands-on Projects</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section
				id="about"
				className="py-20 bg-gray-50 relative"
				style={{
					backgroundImage: `url(${aboutBg})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/80 rounded-2xl backdrop-blur-md">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							About KK Computers
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							A grassroots IT training institute dedicated to empowering youth
							with cutting-edge technology skills and creating opportunities for
							digital transformation.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
							<p className="text-gray-600 leading-relaxed">
								To bridge the digital divide by providing accessible,
								high-quality IT education that transforms lives and communities.
								We believe in hands-on learning, practical skills, and fostering
								innovation among young minds.
							</p>

							<h3 className="text-2xl font-bold text-gray-900">
								Why Choose Us?
							</h3>
							<ul className="space-y-3">
								{[
									"Expert instructors with industry experience",
									"Small class sizes for personalized attention",
									"Real-world projects and internship opportunities",
									"Flexible learning schedules and formats",
									"Job placement assistance and career guidance",
								].map((item, index) => (
									<li key={index} className="flex items-start space-x-3">
										<ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
										<span className="text-gray-700">{item}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="relative">
							<div className="grid grid-cols-2 gap-4">
								<div className="bg-white p-6 rounded-xl shadow-lg">
									<div className="text-3xl font-bold text-blue-600 mb-2">
										5+
									</div>
									<div className="text-gray-700">Years Experience</div>
								</div>
								<div className="bg-white p-6 rounded-xl shadow-lg">
									<div className="text-3xl font-bold text-purple-600 mb-2">
										20+
									</div>
									<div className="text-gray-700">Expert Trainers</div>
								</div>
								<div className="bg-white p-6 rounded-xl shadow-lg">
									<div className="text-3xl font-bold text-green-600 mb-2">
										100+
									</div>
									<div className="text-gray-700">Success Stories</div>
								</div>
								<div className="bg-white p-6 rounded-xl shadow-lg">
									<div className="text-3xl font-bold text-orange-600 mb-2">
										24/7
									</div>
									<div className="text-gray-700">Support Available</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							Our Services
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Comprehensive IT training and development programs designed to
							meet industry demands and accelerate your career growth.
						</p>
					</div>

					{/* Course Images */}
					<div className="flex flex-wrap justify-center gap-6 mb-12">
						<img
							src={course1}
							alt="Course 1"
							className="w-48 h-32 object-cover rounded-xl shadow-lg"
						/>
						<img
							src={course2}
							alt="Course 2"
							className="w-48 h-32 object-cover rounded-xl shadow-lg"
						/>
						<img
							src={course3}
							alt="Course 3"
							className="w-48 h-32 object-cover rounded-xl shadow-lg"
						/>
						<img
							src={cat4}
							alt="Course 4"
							className="w-48 h-32 object-cover rounded-xl shadow-lg"
						/>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
						{services.map((service, index) => (
							<div
								key={index}
								className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
							>
								<div className="mb-6 group-hover:scale-110 transition-transform duration-300">
									{service.icon}
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									{service.title}
								</h3>
								<p className="text-gray-600 mb-6">{service.description}</p>
								<div className="space-y-2">
									{service.features.map((feature, featureIndex) => (
										<div
											key={featureIndex}
											className="flex items-center space-x-3"
										>
											<ChevronRight className="w-4 h-4 text-blue-600" />
											<span className="text-gray-700">{feature}</span>
										</div>
									))}
								</div>
								<button className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
									Learn More
								</button>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Events Section */}
			<section
				id="events"
				className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							Events & Workshops
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Join our exciting events, hackathons, and workshops designed to
							foster innovation and community learning.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{events.map((event, index) => (
							<div
								key={index}
								className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
							>
								<div className="flex items-center justify-between mb-4">
									<span
										className={`px-3 py-1 rounded-full text-sm font-semibold ${
											event.status === "upcoming"
												? "bg-blue-100 text-blue-800"
												: event.status === "ongoing"
												? "bg-green-100 text-green-800"
												: "bg-gray-100 text-gray-800"
										}`}
									>
										{event.status.charAt(0).toUpperCase() +
											event.status.slice(1)}
									</span>
									<Calendar className="w-5 h-5 text-gray-500" />
								</div>

								<h3 className="text-xl font-bold text-gray-900 mb-2">
									{event.title}
								</h3>
								<p className="text-gray-600 mb-4">{event.description}</p>

								<div className="space-y-2 mb-6">
									<div className="flex items-center space-x-2 text-gray-700">
										<Calendar className="w-4 h-4" />
										<span className="text-sm">{event.date}</span>
									</div>
									<div className="flex items-center space-x-2 text-gray-700">
										<Users className="w-4 h-4" />
										<span className="text-sm">{event.participants}</span>
									</div>
								</div>

								<button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
									{event.status === "upcoming"
										? "Register Now"
										: event.status === "ongoing"
										? "Join Now"
										: "View Details"}
								</button>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section id="testimonials" className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							What Our Students Say
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Real stories from our students who have transformed their careers
							through our programs.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{testimonials.map((testimonial, index) => {
							const images = [sam1, sam2, sam8];
							const imgSrc = images[index % images.length];
							return (
								<div
									key={index}
									className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
								>
									<div className="flex items-center mb-4">
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star
												key={i}
												className="w-5 h-5 text-yellow-400 fill-current"
											/>
										))}
									</div>

									{/* Added student image */}
									<div className="flex justify-center mb-4">
										<img
											src={imgSrc}
											alt={testimonial.name}
											className="w-16 h-16 object-cover rounded-full shadow"
										/>
									</div>

									<p className="text-gray-700 mb-6 italic">
										"{testimonial.text}"
									</p>

									<div className="flex items-center space-x-3">
										<div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
											<span className="text-white font-bold">
												{testimonial.name.charAt(0)}
											</span>
										</div>
										<div>
											<div className="font-semibold text-gray-900">
												{testimonial.name}
											</div>
											<div className="text-gray-600 text-sm">
												{testimonial.course}
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							Get In Touch
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Ready to start your IT journey? Contact us today and let's discuss
							how we can help you achieve your goals.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12">
						<div className="space-y-8">
							<div className="bg-white rounded-2xl p-8 shadow-lg">
								<h3 className="text-2xl font-bold text-gray-900 mb-6">
									Contact Information
								</h3>

								<div className="space-y-4">
									<div className="flex items-center space-x-4">
										<div className="bg-blue-100 p-3 rounded-full">
											<Phone className="w-6 h-6 text-blue-600" />
										</div>
										<div>
											<div className="font-semibold text-gray-900">Phone</div>
											<div className="text-gray-600">+91 98765 43210</div>
										</div>
									</div>

									<div className="flex items-center space-x-4">
										<div className="bg-green-100 p-3 rounded-full">
											<Mail className="w-6 h-6 text-green-600" />
										</div>
										<div>
											<div className="font-semibold text-gray-900">Email</div>
											<div className="text-gray-600">info@kkcomputers.com</div>
										</div>
									</div>

									<div className="flex items-center space-x-4">
										<div className="bg-purple-100 p-3 rounded-full">
											<MapPin className="w-6 h-6 text-purple-600" />
										</div>
										<div>
											<div className="font-semibold text-gray-900">Address</div>
											<div className="text-gray-600">
												123 Tech Street, IT Hub, City 400001
											</div>
										</div>
									</div>

									<div className="flex items-center space-x-4">
										<div className="bg-green-100 p-3 rounded-full">
											<MessageCircle className="w-6 h-6 text-green-600" />
										</div>
										<div>
											<div className="font-semibold text-gray-900">
												WhatsApp
											</div>
											<div className="text-gray-600">+91 98765 43210</div>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-white rounded-2xl p-8 shadow-lg">
								<h3 className="text-2xl font-bold text-gray-900 mb-6">
									Follow Us
								</h3>
								<div className="flex space-x-4">
									{[
										{
											icon: <Facebook className="w-6 h-6" />,
											color: "bg-blue-600",
										},
										{
											icon: <Twitter className="w-6 h-6" />,
											color: "bg-sky-500",
										},
										{
											icon: <Instagram className="w-6 h-6" />,
											color: "bg-pink-600",
										},
										{
											icon: <Linkedin className="w-6 h-6" />,
											color: "bg-blue-700",
										},
										{
											icon: <Youtube className="w-6 h-6" />,
											color: "bg-red-600",
										},
									].map((social, index) => (
										<button
											key={index}
											className={`${social.color} p-3 rounded-full text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300`}
										>
											{social.icon}
										</button>
									))}
								</div>
							</div>
						</div>
						<div className="bg-white rounded-2xl p-8 shadow-lg">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								Send us a Message
							</h3>

							<form onSubmit={handleFormSubmit} className="space-y-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Full Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
										placeholder="Enter your full name"
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Email Address
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
										placeholder="Enter your email address"
									/>
								</div>

								<div>
									<label
										htmlFor="phone"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Phone Number
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
										placeholder="Enter your phone number"
									/>
								</div>

								<div>
									<label
										htmlFor="course"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Course Interest
									</label>
									<select
										id="course"
										name="course"
										value={formData.course}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
									>
										<option value="">Select a course</option>
										<option value="Full Stack Development">
											Full Stack Development
										</option>
										<option value="Data Science">Data Science</option>
										<option value="Mobile App Development">
											Mobile App Development
										</option>
										<option value="AI/ML">AI/ML</option>
										<option value="Cybersecurity">Cybersecurity</option>
										<option value="Cloud Computing">Cloud Computing</option>
										<option value="Final Year Project">
											Final Year Project
										</option>
									</select>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Your Message
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
										rows="4"
										placeholder="Enter your message or query"
									></textarea>
								</div>

								<button
									type="submit"
									className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
								>
									<span>Send Message</span>
									<Send className="w-5 h-5" />
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-10 bg-gray-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="text-center md:text-left mb-4 md:mb-0">
							<span className="text-white text-lg font-semibold">
								KK Computers
							</span>
						</div>

						<div className="flex flex-col md:flex-row gap-4">
							{[
								"home",
								"about",
								"services",
								"events",
								"testimonials",
								"contact",
							].map((item) => (
								<button
									key={item}
									onClick={() => scrollToSection(item)}
									className="text-gray-300 hover:text-white transition-colors"
								>
									{item}
								</button>
							))}
						</div>
					</div>

					<div className="border-t border-gray-700 mt-8 pt-4 text-center">
						<p className="text-gray-400 text-sm">
							&copy; 2025 KK Computers. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default KKComputersWebsite;
