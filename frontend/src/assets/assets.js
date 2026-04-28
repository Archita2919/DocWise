import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import main_logo from './main_logo.png'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import doc16 from './doc16.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    main_logo,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
}

export const specialityData = [
    {
        speciality: 'General Physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rajesh Kumar',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS & MD',
        experience: '4 Years',
        about: 'Dr. Rajesh Kumar is a highly regarded General Physician with over 4 years of experience in internal medicine and primary healthcare. Based in a bustling metropolitan city, Dr. Kumar is known for his calm demeanor, thorough diagnostic skills, and a compassionate approach to patient care.',
        fees: 150,
        address: {
            line1: 'Near City Garden, Main Road',
            line2: 'Bhuj, Gujarat'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Kavita Patel',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS & MD',
        experience: '3 Years',
        about: 'Dr. Kavita Patel is a skilled Gynecologist with 3 years of experience, specializing in women health, prenatal care, menstrual disorders, and fertility management. She prioritizes patient comfort, clear communication, and personalized care for overall well-being.',
        fees: 100,
        address: {
            line1: 'Near City Garden, Main Road',
            line2: 'Bhuj, Gujarat'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Manoj Jain',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD & MS',
        experience: '6 Years',
        about: 'Dr. Manoj Jain is a passionate Dermatologist with 6 year of experience, focusing on skin health, treating acne, eczema, and hair disorders. He ensures patient care through personalized treatment plans and a compassionate approach.',
        fees: 200,
        address: {
            line1: 'Near City Garden, Main Road',
            line2: 'Bhuj, Gujarat'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Sanjay Desai',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS & MD',
        experience: '2 Years',
        about: 'Dr. Sanjay Desai is a dedicated Pediatrician with 2 years of experience, specializing in child health, growth monitoring, and immunizations. He provides compassionate care, ensuring children feel comfortable while guiding parents with valuable health advice.',
        fees: 150,
        address: {
            line1: 'Near City Garden, Main Road',
            line2: 'Bhuj, Gujarat'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Pooja Kulkarni',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS, MD & MS',
        experience: '7 Years',
        about: 'Dr. Pooja Kulkarni is an excellent Neurologist with 3 years of expertise in diagnosing and treating neurological disorders, including migraines, epilepsy, and stroke. She is committed to providing patient-focused care through accurate diagnosis and effective treatment plans.',
        fees: 250,
        address: {
            line1: 'Near City Garden, Main Road',
            line2: 'Bhuj, Gujarat'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Kunal Chatterjee',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS & MD',
        experience: '4 Years',
        about: 'Dr. Kunal Chatterjee is a skilled Neurologist with 4 years of experience in managing neurological conditions such as Parkinson disease, epilepsy, and neuropathy. He focuses on accurate diagnosis, effective treatment, and improving patients overall quality of life.',
        fees: 200,
        address: {
            line1: 'Near City Garden, Main Road',
            line2: 'Bhuj, Gujarat'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Abhinav Singh',
        image: doc7,
        speciality: 'General Physician',
        degree: 'MBBS & MD',
        experience: '4 Years',
        about: 'Dr. Abhinav Singh is a dedicated General Physician with 4 years of experience, specializing in treating common illnesses, chronic conditions, and preventive care. He focuses on providing personalized treatment and promoting overall patient health and wellness.',
        fees: 200,
        address: {
            line1: 'Near City Garden, Main Road',
            line2: 'Bhuj, Gujarat'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Ritesh Bansal',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD & MS',
        experience: '9 Years',
        about: 'Dr. Ritesh Bansal is an experienced Gynecologist with 9 years of expertise in women health, pregnancy care, and reproductive health. He is committed to providing compassionate care, offering personalized treatment plans for each patient needs.',
        fees: 250,
        address: {
            line1: 'Near City Garden, Main Road',
            line2: 'Bhuj, Gujarat'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Aditi Joshi',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Aditi Joshi is a proficient Dermatologist with 1 year of experience, specializing in treating skin conditions such as acne, eczema, and pigmentation issues. She focuses on providing effective, personalized skincare solutions for every patient.',
        fees: 100,
        address: {
            line1: 'Near City Garden, Main Road',
            line2: 'Bhuj, Gujarat'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Neel Verma',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS & MD',
        experience: '2 Years',
        about: 'Dr. Neel Verma is a compassionate Pediatrician with 2 years of experience, specializing in child health, vaccinations, and developmental milestones. He ensures each child receives the best care while guiding parents on health and wellness.',
        fees: 100,
        address: {
            line1: 'Near City Garden, Main Road',
            line2: 'Bhuj, Gujarat'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Megha Das',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS, MD & MS',
        experience: '5 Years',
        about: 'Dr. Megha Das is a skilled Neurologist with 5 years of experience, specializing in treating neurological disorders like stroke, epilepsy, and multiple sclerosis. She focuses on accurate diagnosis, tailored treatment, and improving patients neurological health.',
        fees: 200,
        address: {
            line1: 'Near City Garden, Main Road',
            line2: 'Bhuj, Gujarat'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Suresh Nair',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS, MD & MS',
        experience: '10 Years',
        about: 'Dr. Suresh Nair is a highly experienced Neurologist with 10 years of expertise in managing conditions like Alzheimer, Parkinson, and stroke. He is dedicated to providing comprehensive care through advanced treatment and compassionate patient support.',
        fees: 250,
        address: {
            line1: 'Near City Garden, Main Road',
            line2: 'Bhuj, Gujarat'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Ankita Gupta',
        image: doc13,
        speciality: 'General Physician',
        degree: 'MBBS, MD & MS',
        experience: '6 Years',
        about: 'Dr. Ankita Gupta is a knowledgeable General Physician with 6 years of experience, specializing in diagnosing and treating common illnesses, chronic diseases, and preventive care. She focuses on delivering personalized healthcare with attention to detail and compassion.',
        fees: 200,
        address: {
            line1: 'Near City Garden, Main Road',
            line2: 'Bhuj, Gujarat'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Vikram Reddy',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS & MD',
        experience: '3 Years',
        about: 'Dr. Vikram Reddy is a dedicated Gynecologist with 3 years of experience, focusing on minimally invasive surgical techniques and fertility treatments. He strives to provide comprehensive care by addressing both the physical and emotional aspects of women health.',
        fees: 150,
        address: {
            line1: 'Near City Garden, Main Road',
            line2: 'Bhuj, Gujarat'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Priya Iyer',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD & MS',
        experience: '8 Years',
        about: 'Dr. Priya Iyer is an experienced Dermatologist with 8 years of expertise in treating skin conditions such as acne, psoriasis, and aging signs. She emphasizes advanced treatments and holistic approaches to enhance skin health and appearance.',
        fees: 250,
        address: {
            line1: 'Near City Garden, Main Road',
            line2: 'Bhuj, Gujarat'
        }
    },
    {
        _id: 'doc16',
        name: 'Dr. Shweta Kapoor',
        image: doc16,
        speciality: 'Gastroenterologist',
        degree: 'MBBS & MD',
        experience: '4 Years',
        about: 'Dr. Shweta Kapoor is an experienced Gastroenterologist with 4 years of expertise in diagnosing and treating digestive disorders, including acid reflux, liver diseases, and IBS. She focuses on patient care through accurate diagnosis and effective treatment.',
        fees: 250,
        address: {
            line1: 'Near City Garden, Main Road',
            line2: 'Bhuj, Gujarat'
        }
    },
]