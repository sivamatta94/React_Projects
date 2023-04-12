import React from 'react';
import { useParams } from 'react-router-dom';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import toast from 'react-hot-toast';
import logoImg from '../Assests/3dpay5 1.png'
import backImg from '../Assests/backImg.png'

const Category = () => {
    const params = useParams()
    console.log(params.category);

    const fakedata = {
        "data": [
            {
                "slider": [
                    {
                        "heading": "Category A Heading 1",
                        "subHeading": "Product 1 Sub Heading 1...",
                        "id": 1,
                        "backgroundImage": logoImg,
                        "bgColor": 'bg-[#5D9DFB]',
                        "BtnColor": "bg-[#324287]"
                    },
                    {
                        "heading": "Category A Heading 2",
                        "subHeading": "Product 1 Sub Heading 2...",
                        "id": 2,
                        "backgroundImage": logoImg,
                        "bgColor": 'bg-[#C0914B]',
                        "BtnColor": "bg-[#B47730]"
                    },
                    {
                        "heading": "Category A Heading 3",
                        "subHeading": "Product 1 Sub Heading 3...",
                        "id": 3,
                        "backgroundImage": logoImg,
                        "bgColor": 'bg-[#4EC2B1]',
                        "BtnColor": "bg-[#46A58E]"
                    }
                ],
                "category": "a",
                "id": 1
            },
            {
                "slider": [
                    {
                        "heading": "Category B Heading 1",
                        "subHeading": "Product 2 Sub Heading 1...",
                        "id": 4,
                        "backgroundImage": logoImg,
                        "bgColor": 'bg-[#5DD5FB]',
                        "BtnColor": "bg-[#385889]"
                    },
                    {
                        "heading": "Category B Heading 2",
                        "subHeading": "Product 2 Sub Heading 2...",
                        "id": 5,
                        "backgroundImage": logoImg,
                        "bgColor": 'bg-[#DE8939]',
                        "BtnColor": "bg-[#A55106]"
                    },
                    {
                        "heading": "Category B Heading 3",
                        "subHeading": "Product 2 Sub Heading 3...",
                        "id": 6,
                        "backgroundImage": logoImg,
                        "bgColor": 'bg-[#539DC5]',
                        "BtnColor": "bg-[#206C69]"
                    }
                ],
                "category": "b",
                "id": 2
            }
        ]
    }

    const getCategory = fakedata?.data?.find(d => d.category == params?.category)

    const notify = () => toast.success('Here is your toast.');

    return (
        <div className='flex justify-center items-center h-screen w-full'>

            <div className='w-[1152px]  mx-auto z-50 rounded-md'>
                <Splide
                    aria-label=""
                    options={{
                        autoplay: true,
                        height: "100%",
                        breakpoints: {
                            300: {
                                height: "330px",
                            },
                        },

                        rewind: true,
                        arrows: false,
                        pagination: true,
                        speed: "1500",
                    }}
                >

                    {getCategory?.slider?.map((slide) => (
                        <SplideSlide style={{ backgroundImage: `url(${backImg})`, backgroundPosition: 'cover', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className={`relative ${slide?.bgColor} rounded-xl py-3 bg-no-repeat bg-cover`} key={slide.id}>
                            <div className='flex items-center text-white'>
                                {console.log(slide)}
                                <div className='w-1/2'>
                                    <img src={slide?.backgroundImage} alt="" />
                                </div>
                                <div>
                                    <h1 className=' font-semibold text-[34px] leading-[43.54px] pb-[22px] '>{slide?.heading}</h1>
                                    <h4 className='text-[22px]  font-semibold pb-[50px]'>{slide?.subHeading}</h4>
                                    <button className={`py-3 px-14 ${slide?.BtnColor} rounded-md text-white font-semibold`} onClick={notify}>Book Now </button>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
};

export default Category;