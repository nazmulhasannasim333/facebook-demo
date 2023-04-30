import React from "react";
import { Image, ListGroup } from "react-bootstrap";
import { FaBullhorn, FaComments, FaSearch, FaUserCircle, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

const RightSide = () => {
    return (
        <div className="position-fixed">
      <ListGroup className="px-3">
      <h5 className="pt-4">Your Pages and profiles</h5>
      <Link className="text-decoration-none pt-4 ps-1 d-flex align-items-center">
          <Image
            style={{ height: "35px", width: "35px" }}
            src="https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-6/295615759_554978976330432_4255247095307477379_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4mKrcwoDraIAX-FtUiF&_nc_ht=scontent.frjh5-1.fna&oh=00_AfBglhlVeDAVbPwKqJlcDJOHJ2_0ID4jt7lka3PDugvhkQ&oe=644FA2EE"
            roundedCircle
          />
          <span className="text-dark fs-6  ps-3">
          সত্য কথার লেখক
          </span>
        </Link>
        <Link className="text-decoration-none text-secondary pt-4 ps-4 d-flex align-items-center">
          <FaComments className="fs-4" />
          <span className="text-dark  ps-3">11 Messages</span>
        </Link>
        <Link className="text-decoration-none text-secondary pt-4 ps-4 d-flex align-items-center">
          <FaUserCircle className="fs-4" />
          <span className="text-dark  ps-3">Switch into Page</span>
        </Link>
        <Link className="text-decoration-none text-secondary pt-4 ps-4 d-flex align-items-center">
          <FaBullhorn className="fs-4" />
          <span className="text-dark  ps-3">Create Promotion</span>
        </Link>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
        <h5>Contacts</h5>
        <div className="me-5">
        <FaVideo className="me-4" />
        <FaSearch />
        </div>
        </div>
        <Link  className="text-decoration-none ps-1 pt-4 d-flex align-items-center">
          <Image
            style={{ height: "35px", width: "35px" }}
            src="https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-6/341780299_943304136853409_3834707875756989460_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHpQtFkykJTiX29MJLYWK3xWMWD5SgwJ51YxYPlKDAnnTgOUz4Th16ObWJ9H8alAJ8d4azatrMBF27mafAH2uga&_nc_ohc=0519pSMqYLcAX-KVW2N&_nc_ht=scontent.frjh5-1.fna&oh=00_AfDvpQNypR7ZWsUwlMcd6IM97Vjqkl2eG6dhXhUIQa1boA&oe=644ED334"
            roundedCircle
          />
          <span className="text-dark fw-semibold ps-3" style={{fontSize: '18px'}}>
            Md Saiful Islam
          </span>
        </Link>
        <Link  className="text-decoration-none ps-1 pt-4 d-flex align-items-center">
          <Image
            style={{ height: "35px", width: "35px" }}
            src="https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-6/307100064_1788759668134517_2117620113753110715_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHoGGFcA2lpsuKMcRVW993uD_QfzXA63q8P9B_NcDrerw9XpFwsaTgj-FjN3ESaql2QgN0LhSnwgE7Xa4NCvV9F&_nc_ohc=UICmm_nBo-MAX8RJ1oa&_nc_ht=scontent.frjh5-1.fna&oh=00_AfAr9u1xPacMdEHS1VXt7Bfh3dvnEfi5s7qgYYC4tItlGQ&oe=644F5B84"
            roundedCircle
          />
          <span className="text-dark fw-semibold ps-3" style={{fontSize: '18px'}}>
          Hasan Mahamud
          </span>
        </Link>
        <Link  className="text-decoration-none ps-1 pt-4 d-flex align-items-center ">
          <Image
            style={{ height: "35px", width: "35px" }}
            src="https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-6/255182757_1189483468244398_4273138860040395248_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF7ihhxkwf1Fo3Crn4aAWDeXtkEjRU2UY9e2QSNFTZRj_6Hu-5KClfATvGWRlYoHrJ5kJMlkGKb0gxt4D7IbfVU&_nc_ohc=lba7wtPpE3sAX8kHeDj&_nc_ht=scontent.frjh5-1.fna&oh=00_AfDgec5YhpWch5ZngDrx6334XvuoKse-a7EXj8ruhcY42w&oe=645034C9"
            roundedCircle
          />
          <span className="text-dark fw-semibold ps-3" style={{fontSize: '18px'}}>
          Md Soriful Islam
          </span>
        </Link>
        <Link  className="text-decoration-none ps-1 pt-4 d-flex align-items-center ">
          <Image
            style={{ height: "35px", width: "35px" }}
            src="https://scontent.frjh5-1.fna.fbcdn.net/v/t1.6435-9/115905937_916029232142466_4756632168645241430_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGf7RGvalJjO_CEvp7cm5F4YLrlQ9UG0MZguuVD1QbQxo9n1mCdR_88yYtfCcgMUIEbAcrW0wHqAiwv3VKPNcNj&_nc_ohc=-fM88dwfIDIAX_JfeRT&_nc_ht=scontent.frjh5-1.fna&oh=00_AfDXPufZJpPcMGgzfxr_b5HQ8GX1n-dEl5gf2rEqYdx1Mg&oe=647214E0"
            roundedCircle
          />
          <span className="text-dark fw-semibold ps-3" style={{fontSize: '18px'}}>
          MD Nahid Khan
          </span>
        </Link>
        <Link  className="text-decoration-none ps-1 pt-4 d-flex align-items-center ">
          <Image
            style={{ height: "35px", width: "35px" }}
            src="https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-1/338701448_1154323811932256_6660203912643318123_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEZHyKMM771B-zzTzz0rhN4-TnKM2OFcUj5OcozY4VxSGaWifLJ46oiuzFSpOvP9YcSmzecbGNnnN6OLj0DiQIu&_nc_ohc=GkP-ObL_7AsAX_mq4Mq&_nc_ht=scontent.frjh5-1.fna&oh=00_AfAjn3pO19z-Q1EQaMw4cTG_bo7W2uDWmNvBGA1MMdskDg&oe=644F3F47"
            roundedCircle
          />
          <span className="text-dark fw-semibold ps-3" style={{fontSize: '18px'}}>
          Md. Jahirul Islam
          </span>
        </Link>
        <Link  className="text-decoration-none ps-1 pt-4 d-flex align-items-center ">
          <Image
            style={{ height: "35px", width: "35px" }}
            src="https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-6/322709307_585489990075461_108698527953434171_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHPMSkJx12DD02GykbfZOmMr4lmodUObjGviWah1Q5uMbLWPh3tuQPIRs19MrpXPvDp2RYUsQl5lpAjWPVBF_mR&_nc_ohc=1wdmGhg8LzoAX9cafbo&_nc_ht=scontent.frjh5-1.fna&oh=00_AfCYAKFakDrAIAB2DUgMNR7XUhx33shrx9ifC3_3hYKRJQ&oe=64501DA0"
            roundedCircle
          />
          <span className="text-dark fw-semibold ps-3" style={{fontSize: '18px'}}>
          TU SH ER
          </span>
        </Link>
        <Link  className="text-decoration-none ps-1 pt-4 d-flex align-items-center ">
          <Image
            style={{ height: "35px", width: "35px" }}
            src="https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-1/277536935_672480177320784_7636957639339550558_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeFxl2UCNSYXfAB1eCKZW_1Y4p2pV4ZSfkHinalXhlJ-QVjZFVXeiHFgV5CBM0CdBghI2u6cBfkR0M4qwllI5qkS&_nc_ohc=HfI_9xJqDLwAX9eyNzf&_nc_ht=scontent.frjh5-1.fna&oh=00_AfBYogh-eaf0XOQ2NChbYqZ1ao77iEoLP4CElyPzivXc1A&oe=645032EE"
            roundedCircle
          />
          <span className="text-dark fw-semibold ps-3" style={{fontSize: '18px'}}>
          Ashraf Mahmud
          </span>
        </Link>
        <Link  className="text-decoration-none ps-1 pt-4 d-flex align-items-center ">
          <Image
            style={{ height: "35px", width: "35px" }}
            src="https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-6/321102693_1189839488303105_1501463134852893278_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFZ8CFBPOakH4zEQ5WOUB2dokTq3UF6lziiROrdQXqXOKAVTXbCrIWuy8cMTqrnknMxf6teDzDBBhzBKFJMABTc&_nc_ohc=I3Aote69JR0AX-wmT--&_nc_ht=scontent.frjh5-1.fna&oh=00_AfCo6DyquvXuR9WuHnvWVRcLVxH10ar8AW4CaVWX2GK_fg&oe=6451127D"
            roundedCircle
          />
          <span className="text-dark fw-semibold ps-3" style={{fontSize: '18px'}}>
          Suborna Khatun
          </span>
        </Link>
        <Link  className="text-decoration-none ps-1 pt-4 d-flex align-items-center ">
          <Image
            style={{ height: "35px", width: "35px" }}
            src="https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-6/330768939_1149954462362333_1988837727879342010_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFmN5zYOG4tV8Njl4WNaHwF8JlEc39p-_fwmURzf2n79x8IL4N25joZKZ0lQCH_ggif8TgL2SEWf9vj_tPTRyq4&_nc_ohc=KraFsYNX7YMAX8Pl15b&_nc_ht=scontent.frjh5-1.fna&oh=00_AfC_dH6zPkAlktr36llPYD9e5VTITmf40lVKeNSAytMyxw&oe=6451259A"
            roundedCircle
          />
          <span className="text-dark fw-semibold ps-3" style={{fontSize: '18px'}}>
          Mizanur Rahman Robin
          </span>
        </Link>
        <Link  className="text-decoration-none ps-1 pt-4 d-flex align-items-center ">
          <Image
            style={{ height: "35px", width: "35px" }}
            src="https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-6/333129234_1352232045599836_6033544146964084548_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG95hgdJAHd68mnDySHP3Yl0FlC8-U7xC7QWULz5TvELgQILCkM1DfianTjRcVWNa3Oyo7wfvkdX4kjs51G-c0z&_nc_ohc=f_7inTbMx3AAX9jkcoX&_nc_ht=scontent.frjh5-1.fna&oh=00_AfBSSssN19AesBh7FfZObUM8PRGx7kBKyp_-T_bCTJfegg&oe=644FC49D"
            roundedCircle
          />
          <span className="text-dark fw-semibold ps-3" style={{fontSize: '18px'}}>
          Md. Tanvir Ahmed Islam
          </span>
        </Link>
      </ListGroup>
    </div>
    );
};

export default RightSide;