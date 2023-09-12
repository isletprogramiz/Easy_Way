import { useState, useEffect } from 'react';
import style from '../../css/services.module.css'
import ReactSearchBox from "react-search-box";
import { FaSearch } from "react-icons/fa";
import Worker from '../card/Worker';
import { Button } from '../button/Button';
import { Divider } from '../divider/Divider'
import Section from './Section';
import Footer from '../footer/footer';
import Nav from '../nav/Nav';
import { Navigate } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
const Services = () => {
    const [text, setText] = useState();
    const [data, setData] = useState();

    const submit = (e) => {
        e.preventDefault();

        console.log('hello')
    }
    const searchdata = [
        {
            key: "electrician",
            value: "Electrician",
        },
        {
            key: "carpenter",
            value: "Carpenter",
        },
        {
            key: "cleaner",
            value: "Cleaner",
        },
        {
            key: "plumber",
            value: "Plumber",
        },
        {
            key: "macheninc",
            value: "Machenic",
        },
        {
            key: "maid",
            value: "Maid",
        }

    ];
    const searchHandle = () =>{
       console.log(text)
    }

    const getWorkersData = async() =>{
        const res = await fetch(baseUrl+'/api/workers/getAllWorkers');
  
        if(res.status === 200)
        {
          const data = await res.json();
          console.log(data)
          setData(data);
        }
      }
    useEffect(() => {
        getWorkersData();
    }, []);

    return (
        <>
        <Nav/>
        <div className={style.container}>
            <div className={style.search}>
                <form  className={style.search_box}>
                    <ReactSearchBox data={searchdata} onSubmit={searchHandle} placeholder="Search..."  onChange={(record) => setText(record)} leftIcon={<FaSearch />} iconBoxSize="40px" />
                </form>
            </div>
            {data && 
            <>
                <Section name="Top Workers" data={data}/>
                <hr />
                <Divider>workers</Divider>
                <Section name="Top Electrician" data={data}/>
                <Section name="Top Plumber" data={data}/>
                <Section name="Top Cleaner" data={data}/>
                <Section name="Top Carpenter" data={data}/>
                <Section name="Top Mechanic" data={data}/>
            </>
            }
        </div>
        <Footer/>
        </>
    )
}

export default Services