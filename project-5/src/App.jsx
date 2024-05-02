import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { FiSearch } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";
import {collection, getDocs} from "firebase/firestore";
import { db } from './config/firebase';
import {HiOutlineUserCircle} from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";

export default function App() {

  const [contacts,setContacts] = useState([]);

useEffect(() => {
  const getContacts= async () =>{
    try{

      const contactsRef = collection(db,"contacts");
      const contactsSnapshot = await getDocs(contactsRef);
      const contactsList = contactsSnapshot.docs.map((doc) => {
        return{
          id: doc.id,
          ...doc.data()
        }
      });
      setContacts(contactsList);
    }
    catch(error){
      console.log(error);
      }
    };
    getContacts();
  },[]);


  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className='flex gap-2'>
      <div className='flex relative items-center flex-grow my-4'>
        <FiSearch  className='text-white text-3xl absolute ml-4' />
      <input type='text' className='h-10 flex-grow rounded-md bg-transparent border border-white text-white ml-2 pl-10' />
      </div>
        <CiCirclePlus className='text-5xl my-4 cursor-pointer text-white'/>
      </div>

      <div>
        {
          contacts.map((contact) =>(
            
            <div key={contact.id} className='bg-dark-yellow  '>
              <HiOutlineUserCircle className='text-orange text-5xl' />
              <div className=''>
                <h1 className=''>{contact.Name}</h1>
                <p className=''>{contact.Email}</p>
                </div>
                <div>
                  <RiEditCircleLine />
                  <IoMdTrash />
                </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
