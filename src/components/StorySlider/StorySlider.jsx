import React from "react";
import { Card, Container, Image } from "react-bootstrap";
import { FaBookOpen, FaVideo } from "react-icons/fa";
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";

const StorySlider = () => {
  return (
    <div className="">
      <Card className="rounded-3">
        <Card.Body>
          <div className="d-flex justify-content-around pt-2">
            <div className="d-flex align-items-center">
              <span>
                <FaBookOpen className="fs-4 text-primary me-2" />
              </span>
              <span className="fw-semibold text-primary fs-5">Stories</span>
            </div>
            <div className="d-flex align-items-center">
              <span>
                <FaVideo className="fs-4 text-secondary me-2" />
              </span>
              <span className="fw-semibold text-secondary fs-5">Reels</span>
            </div>
          </div>
        </Card.Body>
        <div>
          <hr />
        </div>

        <Container className="mx-auto">
          <Swiper className="pb-3"
              modules={[Navigation]}
              spaceBetween={200}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
            <Image style={{height: "300px", width: "200px"}} src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=826&t=st=1682869386~exp=1682869986~hmac=9f1912790dcec6c12e70497a7140d745bbcb8aaf698acb1f7ecfab6064488072" rounded />
            </SwiperSlide>
            <SwiperSlide>
            <Image style={{height: "300px", width: "200px"}} src="https://img.freepik.com/premium-photo/biryani-chicken-traditional-dish-indian-cuisine-with-basmati-rice-fried-onion-fresh-cilantro-bowl-gray-rustic-stone-background-authentic-indian-meal-top-view-close-up_92134-642.jpg?w=740" rounded />
            </SwiperSlide>
            <SwiperSlide>
            <Image style={{height: "300px", width: "200px"}} src="https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg?w=740&t=st=1682870074~exp=1682870674~hmac=327399585bc8b86542b4a414c23cc4f94e9c680f63dabdc73e004bb5e5ff0a30" rounded />
            </SwiperSlide>
            <SwiperSlide>
            <Image style={{height: "300px", width: "200px"}} src="https://img.freepik.com/free-photo/delicious-pakistani-food-with-sauce_23-2148825165.jpg?w=740&t=st=1682870117~exp=1682870717~hmac=cdad0647d8057d1d5007c417e672fd268acdc5293cd5dc06a60f166bac97ad6c" rounded />
            </SwiperSlide>
            <SwiperSlide>
            <Image style={{height: "300px", width: "200px"}} src="https://img.freepik.com/free-photo/door-opening-revealing-beautiful-city_23-2149768547.jpg?w=826&t=st=1682870629~exp=1682871229~hmac=fe5f19968f8366c58b1f6d1a7b5d03d66629c51b5c915e3fc71398e62727c68d" rounded />
            </SwiperSlide>
            <SwiperSlide>
            <Image style={{height: "300px", width: "200px"}} src="https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?w=826&t=st=1682870161~exp=1682870761~hmac=6121e73f3199604d88218cfdc0d8a086c64994935f3315f8c725c9b3f6eaf34a" rounded />
            </SwiperSlide>
            <SwiperSlide>
            <Image style={{height: "300px", width: "200px"}} src="https://img.freepik.com/free-photo/mom-cute-baby-indoor_624325-2932.jpg?w=740&t=st=1682870536~exp=1682871136~hmac=d8bf6d240ecd890d71fc7c6415fd73b61e2f1160e9ab4b420d89297cef3519c8" rounded />
            </SwiperSlide>
            <SwiperSlide>
            <Image style={{height: "300px", width: "200px"}} src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?w=740&t=st=1682870410~exp=1682871010~hmac=24ff6087c1592fa98895b721121d7752554dfcd86ab24ace3ddb5c968026414d" rounded />
            </SwiperSlide>
            <SwiperSlide>
            <Image style={{height: "300px", width: "200px"}} src="https://img.freepik.com/free-photo/well-done-steak-homemade-potatoes_140725-3989.jpg?w=740&t=st=1682870225~exp=1682870825~hmac=4c16241ad98d7e0201c70d6e3de53b255e511015b83f69d162e5d017ca08c05f" rounded />
            </SwiperSlide>
            <SwiperSlide>
            <Image style={{height: "300px", width: "200px"}} src="https://img.freepik.com/free-photo/full-length-portrait-confident-happy-man_171337-4818.jpg?w=740&t=st=1682870304~exp=1682870904~hmac=b1d430604073267354c4823c2cbfda7ee87fc02f598d5a7369edf62804e0da30" rounded />
            </SwiperSlide>
            </Swiper>
        </Container>
      </Card>
    </div>
  );
};

export default StorySlider;
