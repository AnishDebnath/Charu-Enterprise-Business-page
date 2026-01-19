import zeroDefect from '../../../assets/badge/Zero Defect.png';
import fivetyYears from '../../../assets/badge/55 yers.png';
import iso9001 from '../../../assets/badge/ISO-9001.png';
import certISO from '../../../assets/certificate & awards/ISO.jpg';
import certAward from '../../../assets/certificate & awards/Award.jpg';
import certGST from '../../../assets/certificate & awards/GST.jpg';
import certMSME from '../../../assets/certificate & awards/MSME.jpg';
import founderOP from '../../../assets/founders/Mr.-OP-Maskara.jpg';
import founderSom from '../../../assets/founders/Mr.-Som-Maskara.jpg';
import plantPic1 from '../../../assets/plant images/our-team-pic-1.jpg';
import plantPic2 from '../../../assets/plant images/our-team-pic-2.jpg';
import plantPic3 from '../../../assets/plant images/our-team-pic-3.jpg';
import plantPic4 from '../../../assets/plant images/our-team-pic-4.jpg';

export const ABOUT_PAGE_DATA = {
    legacy: "Our Legacy",
    whoWeAre: "Who We Are",
    description: "With five decades of expertise, Charu Enterprises – India has been a global leader in fence fittings manufacturing, delivering 150 million+ pieces across four continents. We specialize in Pressed Steel, Malleable, and Aluminum Fence Fittings & Tension Bars, all galvanized or powder-coated for superior durability.",
    additionalInfo: "A trusted name in the industry, we have been exhibiting at FENCETECH for over 30 years and have received prestigious awards from the Government of India.  Our 20,000 SQFT. factory facility features an in-house galvanizing plant, die & mold development, and testing lab, ensuring top-quality, innovative, and custom solutions for the global market.",
    credentials: {
        satisfaction: {
            image: zeroDefect
        },
        years: {
            image: fivetyYears
        },
        iso: {
            image: iso9001
        }
    },
    certificates: [
        { title: "ISO 9001:2015", subtitle: "Quality Management System", image: certISO },
        { title: "EEPC India", subtitle: "Certificate of Export Excellence", image: certAward },
        { title: "GST", subtitle: "Registration Certificate", image: certGST },
        { title: "MSME", subtitle: "Registration Certificate", image: certMSME }
    ],
    founders: [
        {
            id: "1",
            name: "Mr. OP Maskara",
            role: "Founder / President",
            image: founderOP,
            bio: "Our Founder President, a renowned Yoga Guru, has taught yoga to 300,000 people across India for free over two decades. With 62 years in exports and engineering goods, he also served as Deputy Regional Chairman (ER) of the Government Engineering Export Promotion Council. A Lions Clubs International member for 57 years, he was Deputy District Governor . He has also appeared on TV shows regularly."
        },
        {
            id: "2",
            name: "Mr. Som Maskara",
            role: "Vice President",
            image: founderSom,
            bio: "Our Vice President is a dedicated humanitarian and former President of Leo Club International, actively contributing to projects that provide meals to millions of underprivileged children. With a strong passion for sports, he participates in competitive badminton and rifle shooting, demonstrating discipline and precision. Additionally, as an advanced yoga practitioner, he embrace a holistic approach to well-being, combining physical fitness with mindfulness. Their diverse experiences reflect a commitment to leadership, community service, and personal excellence."
        }
    ],
    officeInfo: {
        office: "28 B, Shakespeare Sarani, 10 B, Neelamber Building Kolkata - 700017, India",
        factory: "Saraswati Complex, Bhandardaha, Domjur, Howrah 711405 (Near Srijon Industrial Park) West Bengal, India",
        contacts: {
            india: "+91 9830083777",
            usa: "+1 (346) 433-7572",
            email: "opmaskara1008@gmail.com / som83777@gmail.com"
        }
    },
    plantImages: [
        { id: "1", image: plantPic1, alt: "Manufacturing Facility" },
        { id: "2", image: plantPic2, alt: "Production Team" },
        { id: "3", image: plantPic3, alt: "Factory Equipment" },
        { id: "4", image: plantPic4, alt: "Factory" }
    ]
};
