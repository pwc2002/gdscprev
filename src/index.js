import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import logo from './logo.png';
import s1 from './s1.png';
import s2 from './s2.png';
import s3 from './s3.png';
import poster from './poster1.png';
import opensource from './opensource.png';
import github from './github.png';
import figma from './figma.png';
import notion from './notion.png';
import vector from './Vector.png';
import background from './background.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



const Home = () => {

      
    return <>
        
        <img src={background} alt="background" className="w-full h-full z-0 absolute"/>
        <div className="flex justify-center w-[23rem] relative">
            <div className="flex flex-col z-10 w-full justify-center items-center text-white">
                <div className="flex flex-row pt-10">
                    <img src={vector} alt="back" className="flex absolute w-2 left-4 cursor-pointer"/>
                    <img src={logo} alt="logo" className="w-[50px]" />
                </div>
                <div className="text-center pt-8 text-white text-xs font-bold font-['Noto Sans KR']">GDSC<span className="text-white text-[8px] font-normal font-['Noto Sans KR']">Inha</span>는 성장할 수 있는 기반을 마련합니다. <br/><br/>원하는 소모임이 없나요?<br/><br/>걱정하지 마세요, 누구나 소모임을 개설할 수 있어요!<br/>소모임에 참여하는 분들에게는 다양한 혜택이 주어집니다</div>
                <div className="flex h-8 border-b border-[#ffffff40] w-10/12 justify-center"></div>
                <div className="flex pt-10 pb-8 font-bold text-lg"> 협업 툴 스터디</div>
                <div className="flex w-[35rem]"> 
                    <Swiper
                        spaceBetween={7}
                        slidesPerView={3}
                        centeredSlides={true}
                        scrollbar={{ draggable: true }}
                        loop = {true}
                    >
                        <SwiperSlide><div className="flex flex-col w-[165px] relative justify-center items-center">
                                <div className="flex relative justify-center items-center">
                                    <img src={s1} alt="logo" className="w-full filter brightness-50 rounded-lg" />
                                    <img src={figma} className="absolute w-[3rem]"/>
                                </div>
                                <div className="flex pt-4">Figma</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="flex flex-col w-[165px] relative justify-center items-center">
                                <div className="flex relative justify-center items-center">
                                    <img src={s2} alt="logo" className="w-full filter brightness-50 rounded-lg" />
                                    <img src={github} className="absolute w-[3rem]"/>
                                </div>
                                <div className="flex pt-4">Github</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="flex flex-col w-[165px] relative justify-center items-center">
                                <div className="flex relative justify-center items-center">
                                    <img src={s3} alt="logo" className="w-full filter brightness-50 rounded-lg" />
                                    <img src={notion} className="absolute w-[3rem]"/>
                                </div>
                                <div className="flex pt-4">Notion</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="flex flex-col w-[165px] relative justify-center items-center">
                                <div className="flex relative justify-center items-center">
                                    <img src={s1} alt="logo" className="w-full filter brightness-50 rounded-lg" />
                                    <img src={figma} className="absolute w-[3rem]"/>
                                </div>
                                <div className="flex pt-4">Figma</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="flex flex-col w-[165px] relative justify-center items-center">
                                <div className="flex relative justify-center items-center">
                                    <img src={s2} alt="logo" className="w-full filter brightness-50 rounded-lg" />
                                    <img src={github} className="absolute w-[3rem]"/>
                                </div>
                                <div className="flex pt-4">Github</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="flex flex-col w-[165px] relative justify-center items-center">
                                <div className="flex relative justify-center items-center">
                                    <img src={s3} alt="logo" className="w-full filter brightness-50 rounded-lg" />
                                    <img src={notion} className="absolute w-[3rem]"/>
                                </div>
                                <div className="flex pt-4">Notion</div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="flex h-8 border-b border-[#ffffff40] w-10/12 justify-center"></div>
                <div className="flex pt-10 pb-3 font-bold text-lg"> 커리어 소모임</div>
                <div className="flex text-stone-300 text-xs"> 같은 방향을 보는 멤버들과 함께 공부할 수 있어요</div>
                <div className="flex w-full pl-11 pt-10 pb-2 font-bold text-base ">BE</div>
                <div className="flex w-[17rem] h-40">
                    <Swiper
                        spaceBetween={7}
                        slidesPerView={1}
                        scrollbar={{ draggable: true }}
                        loop = {false}
                        pagination ={true}
                        modules={[Pagination]}
                    >
                        <SwiperSlide><div className="flex flex-col justify-center items-center">
                                <div className="flex w-[17rem] h-12 justify-center items-center bg-[#141414] rounded-lg">토비의 스프링 스터디</div>
                                <div className="flex w-[17rem] h-12 justify-center items-center bg-[#141414] rounded-lg mt-4">우아한 테크코스 스터디</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="flex flex-col justify-center items-center">
                                <div className="flex w-[17rem] h-12 justify-center items-center bg-[#141414] rounded-lg">가나다 스터디</div>
                                <div className="flex w-[17rem] h-12 justify-center items-center bg-[#141414] rounded-lg mt-4">웹 프런트 스터디</div>
                            </div>
                        </SwiperSlide><SwiperSlide><div className="flex flex-col justify-center items-center">
                                <div className="flex w-[17rem] h-12 justify-center items-center bg-[#141414] rounded-lg">웹 백앤드 스터디</div>
                                <div className="flex w-[17rem] h-12 justify-center items-center bg-[#141414] rounded-lg mt-4">인하대 스터디</div>
                            </div>
                        </SwiperSlide><SwiperSlide><div className="flex flex-col justify-center items-center">
                                <div className="flex w-[17rem] h-12 justify-center items-center bg-[#141414] rounded-lg">GDSC 스터디</div>
                                <div className="flex w-[17rem] h-12 justify-center items-center bg-[#141414] rounded-lg mt-4">삼성전자 스터디</div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="flex w-full pl-11 pt-10 pb-2 font-semibold text-base">CSE 스터디😈</div>
                <div className="flex w-full pl-11 pt-2 text-stone-300 text-[10px]"> CSE 악마 스터디는 자기 개발을 위한 소모임입니다.<br/>스터디원들의 지속적인 노력을 위해 악마들이 틈틈이 지켜보고 있어요!</div>
                <div className="flex flex-col h-32 w-full">
                    <div className="flex flex-row items-center pt-5">
                        <div className="flex w-20 h-5 ml-11 bg-red-600 bg-opacity-30 rounded-xl justify-center items-center text-white text-[10px] font-semibold font-['Open Sans']">주간 스프린트</div>
                        <div className="text-white text-[10px] font-normal font-['Noto Sans KR'] pl-4">주말동안 다음 주 계획 미리 세우기</div>
                    </div>
                    <div className="border-l h-3 ml-20"></div>
                    <div className="flex flex-row items-center">
                        <div className="flex w-20 h-5 ml-11 bg-red-600 bg-opacity-30 rounded-xl justify-center items-center text-white text-[10px] font-semibold font-['Open Sans']">격주 총회의</div>
                        <div className="text-white text-[10px] font-normal font-['Noto Sans KR'] pl-4">중간 점검을 위한 네트워킹 행사</div>
                    </div>
                    <div className="border-l h-3 ml-20"></div>
                    <div className="flex flex-row items-center">
                        <div className="flex w-20 h-5 ml-11 bg-red-600 bg-opacity-30 rounded-xl justify-center items-center text-white text-[10px] font-semibold font-['Open Sans']">섹션별 총회의</div>
                        <div className="text-white text-[10px] font-normal font-['Noto Sans KR'] pl-4">비슷한 목표를 가진 사람들과의 진행 상황 공유</div>
                    </div>
                </div>
                <div className="flex h-8 border-b border-[#ffffff40] w-10/12 justify-center"></div>
                <div className="flex pt-10 pb-9 font-bold text-sm text-center"> GDSC INHA & GDSC DONGA & GPTers <br/>데이터 시각화 스터디</div>
                <img src={poster} alt="poster" className="w-52 rounded-xl" />
                <div className="flex h-8 border-b border-[#ffffff40] w-10/12 justify-center"></div>
                <div className="flex pt-10 pb-3 font-bold text-base text-center"> Open source 기여 활동</div>
                <div className="flex pt-2 text-stone-300 text-xs text-center"> 여러분의 한계를 정하지 마세요!<br/>깃허브 초보자라도, 관심 있는 오픈 소스가 있다면 <br/>대형 프로젝트의 컨트리뷰터가 될 수 있답니다.</div>
                <img src={opensource} alt="poster" className="w-64 rounded-xl my-9" />
            </div>
        </div>
        </>;
};

ReactDOM.render(<Home />, document.getElementById('root'));