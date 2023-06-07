import images from "./imageData";

function getRandomImage() {
  let indexAt = Math.floor(Math.random() * images.length);
  return images[indexAt];
}
const facilityData = [
  {
    id: 1,
    title: "Physics Lab",
    description:
      "The physics lab is a well-equipped facility designed to provide students with hands-on experience and practical knowledge in the field of physics. It offers a wide range of scientific instruments, including spectrometers, oscilloscopes, and laser systems, enabling students to conduct experiments and explore fundamental principles of physics. The lab also provides resources for advanced research and projects, allowing students to delve deeper into specialized areas such as quantum mechanics, electromagnetism, and thermodynamics. With a focus on fostering critical thinking and problem-solving skills, the physics lab serves as a hub for scientific exploration and discovery.",
    img: getRandomImage(),
  },
  {
    id: 2,
    title: "Chemistry Lab",
    description:
      "The chemistry lab is a state-of-the-art facility where students can engage in practical experiments, chemical analyses, and research in various branches of chemistry. Equipped with modern instrumentation, such as gas chromatographs, infrared spectrometers, and fume hoods, the lab offers students the opportunity to explore chemical reactions, synthesize compounds, and investigate the properties of different substances. Safety measures and protocols are strictly followed to ensure a secure working environment. The chemistry lab serves as a platform for students to develop their laboratory skills, understand chemical concepts, and apply theoretical knowledge to real-world scenarios, preparing them for future endeavors in chemistry and related fields.",
    img: getRandomImage(),
  },
  {
    id: 3,
    title: "Computer Lab",
    description:
      "The computer lab is a dynamic space that provides students with access to cutting-edge technology and resources for computer-based learning and exploration. Equipped with high-performance computers, programming software, and internet connectivity, the lab supports a wide range of activities, including coding, software development, data analysis, and simulations. Students can learn programming languages, explore algorithms, and gain hands-on experience in areas such as artificial intelligence, machine learning, and computer graphics. The lab also serves as a collaborative environment where students can work on group projects, share knowledge, and participate in coding competitions. With its focus on computational thinking and problem-solving skills, the computer lab prepares students for the digital age and fosters innovation and creativity.",
    img: getRandomImage(),
  },
  {
    id: 4,
    title: "Biology Lab",
    description:
      "The biology lab is a vibrant and well-equipped facility designed to facilitate hands-on learning and scientific exploration in the field of biology. With advanced microscopes, centrifuges, and DNA analysis equipment, the lab provides students with the necessary tools to study cellular structures, genetics, microbiology, and ecology. Students can conduct experiments, analyze biological samples, and engage in research projects that contribute to their understanding of living organisms and their interactions with the environment. The lab also promotes the development of critical thinking skills by encouraging students to design experiments, collect and interpret data, and communicate their findings effectively. Whether investigating the intricacies of cells or exploring the biodiversity of ecosystems, the biology lab offers a stimulating environment for students to immerse themselves in the wonders of life sciences.",
    img: getRandomImage(),
  },
  {
    id: 5,
    title: "Library",
    description:
      "The library is a haven of knowledge and a hub for academic exploration. With an extensive collection of books, periodicals, digital resources, and research databases, it provides students with a wide range of materials for study, research, and leisure reading. The library offers a serene and welcoming environment, conducive to focused learning and intellectual growth. Students can engage in independent research, access scholarly journals, and seek guidance from librarians who can assist with information retrieval and research strategies. In addition to its vast print and digital resources, the library provides spaces for group study, quiet reading areas, and computer workstations. It serves as a center for intellectual exchange, fostering a culture of curiosity, inquiry, and lifelong learning.",
    img: getRandomImage(),
  },
  {
    id: 6,
    title: "Sports Facilities",
    description:
      "The sports facilities are designed to promote physical fitness, teamwork, and a healthy lifestyle among students. The campus boasts a well-maintained field, a spacious gymnasium, and a variety of sports equipment to cater to different interests and skill levels. Whether it's soccer, basketball, volleyball, or track and field, students can participate in a wide range of sports activities and competitions. The sports facilities also provide opportunities for recreational sports, allowing students to unwind, de-stress, and engage in leisurely physical activities. Coaches and trainers are available to provide guidance and support, helping students develop their athletic abilities, enhance their coordination, and learn valuable lessons about teamwork, discipline, and sportsmanship.",
    img: getRandomImage(),
  },
  {
    id: 7,
    title: "Music Class",
    description:
      "The music class is a vibrant and creative space where students can explore the world of music, develop their musical talents, and deepen their understanding of musical theory and practice. Equipped with a range of musical instruments, including pianos, guitars, drums, and violins, the class offers students the opportunity to learn to play different instruments and experiment with various genres and styles of music. In addition to instrumental training, the class provides vocal instruction and ensemble opportunities, allowing students to collaborate and perform together. Music theory lessons cover topics such as notation, harmony, and composition. The music class serves as a platform for students to express their artistic creativity, cultivate a deep appreciation for music, and develop skills that can last a lifetime.",
    img: getRandomImage(),
  },
  {
    id: 8,
    title: "Health Facilities",
    description:
      "The health facilities on campus prioritize the well-being and safety of students. With a dedicated team of healthcare professionals, the facilities offer medical services, first aid, and preventive care to address the health needs of students. The facilities are equipped with modern medical equipment and maintain high standards of cleanliness and hygiene. The healthcare professionals provide routine check-ups, vaccinations, and guidance on maintaining a healthy lifestyle. In case of any health emergencies, the facilities are well-prepared to handle critical situations and provide immediate care. The health facilities play a vital role in ensuring the overall well-being of students, promoting a healthy and conducive learning environment.",
    img: getRandomImage(),
  },
  {
    id: 9,
    title: "Cantine",
    description:
      "The cantine is a welcoming and comfortable space where students can enjoy nutritious meals and socialize during breaks. The cantine offers a diverse menu with a variety of food options, including balanced meals, vegetarian choices, and snacks. The food is prepared with high-quality ingredients, taking into consideration nutritional value and dietary requirements. The cantine promotes healthy eating habits and provides a pleasant dining experience for students. It also serves as a gathering place, where students can engage in conversations, relax, and recharge before or after classes. The cantine staff ensures a clean and hygienic environment, adhering to food safety regulations and maintaining a friendly atmosphere for all.",
    img: getRandomImage(),
  },
];

export default facilityData;
