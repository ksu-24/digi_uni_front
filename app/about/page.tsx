import Title from "@/app/about/title";
import {unstable_setRequestLocale} from "next-intl/server";
import AboutProject from "@/app/about/about-project";
import Goal from "@/app/about/goal";
import ConcreteGoals from "@/app/about/concrete-goals";
import banner from "@/public/images/about/banner.png";
import Image from "next/image";
import TargetAudience from "@/app/about/target-audience";
import Team from "@/app/about/team";
import Partners from "@/app/about/partners";
import ProjectTimeline from "@/app/about/project-timeline";
import Footer from "@/app/[locale]/_footer/footer";
import {BwTiles} from "@/app/_util/components/tiles";

// export default async function AboutPage(
//     {
//         params
//     }: {
//         params: {
//             locale: string
//         }
//     }
// ) {
//     unstable_setRequestLocale(params.locale);
//
//     return (
//         <>
//             <Title/>
//             <AboutProject/>
//             <Goal/>
//             <ConcreteGoals/>
//             <Image src={banner} alt="banner" width={"100%" as never}/>
//             <TargetAudience/>
//             <Team/>
//             <Partners/>
//             <ProjectTimeline/>
//             <Footer tiles={<BwTiles/>}/>
//         </>
//     )
// }

export default function AboutPage() {
    return (
        <>
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            <style
                dangerouslySetInnerHTML={{
                    __html: '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
                }}
            />
            <title>About</title>
            <meta content="About" property="og:title" />
            <meta content="About" property="twitter:title" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta content="Webflow" name="generator" />
            <link
                href="./About_UK_files/digiuni-website.webflow.0051867ca.css"
                rel="stylesheet"
                type="text/css"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        '@media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="55eb963f-a970-427d-f2dc-e5c24f5d16ab"] {opacity:0;-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="7ee7b024-8d42-8f69-8729-5998ae44ab04"] {opacity:0;-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="468bbde8-fa02-cfbe-d1e9-2a99041d7eab"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="55eb963f-a970-427d-f2dc-e5c24f5d16a7"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="fdeb1115-b3c7-1201-03ee-959c86c605f6"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="98a1eb3b-b205-929c-e4c8-e5bb09870db7"] {opacity:0;-webkit-transform:translate3d(0, 0, 0) scale3d(1, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="69f9d803-97d3-c179-231e-d0a808b3362d"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="b825fea4-e8bf-5a64-8ce5-728a9e357b74"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="6d36b9df-96b4-4587-547f-612de462422d"] {background-color:rgb(255,255,255);}html.w-mod-js:not(.w-mod-ix) [data-w-id="4bca574b-93b4-5d70-2b24-f49a05ee80ed"] {background-color:rgb(255,255,255);}}@media (max-width:991px) and (min-width:768px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="55eb963f-a970-427d-f2dc-e5c24f5d16ab"] {opacity:0;-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="7ee7b024-8d42-8f69-8729-5998ae44ab04"] {opacity:0;-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="468bbde8-fa02-cfbe-d1e9-2a99041d7eab"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="55eb963f-a970-427d-f2dc-e5c24f5d16a7"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="fdeb1115-b3c7-1201-03ee-959c86c605f6"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="98a1eb3b-b205-929c-e4c8-e5bb09870db7"] {opacity:0;-webkit-transform:translate3d(0, 0, 0) scale3d(1, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="69f9d803-97d3-c179-231e-d0a808b3362d"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="b825fea4-e8bf-5a64-8ce5-728a9e357b74"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="6d36b9df-96b4-4587-547f-612de462422d"] {background-color:rgb(255,255,255);}html.w-mod-js:not(.w-mod-ix) [data-w-id="4bca574b-93b4-5d70-2b24-f49a05ee80ed"] {background-color:rgb(255,255,255);}}@media (max-width:767px) and (min-width:480px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="55eb963f-a970-427d-f2dc-e5c24f5d16ab"] {opacity:0;-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="7ee7b024-8d42-8f69-8729-5998ae44ab04"] {opacity:0;-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="55eb963f-a970-427d-f2dc-e5c24f5d16a7"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="d2b0a421-5869-8e82-a786-763e6ce70c50"] {-webkit-transform:translate3d(0, 0, 0) scale3d(1, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="6d36b9df-96b4-4587-547f-612de462422d"] {background-color:rgb(255,255,255);}}@media (max-width:479px) {html.w-mod-js:not(.w-mod-ix) [data-w-id="55eb963f-a970-427d-f2dc-e5c24f5d16ab"] {opacity:0;-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="7ee7b024-8d42-8f69-8729-5998ae44ab04"] {opacity:0;-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="55eb963f-a970-427d-f2dc-e5c24f5d16a7"] {opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id="d2b0a421-5869-8e82-a786-763e6ce70c50"] {-webkit-transform:translate3d(0, 0, 0) scale3d(1, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);}html.w-mod-js:not(.w-mod-ix) [data-w-id="6d36b9df-96b4-4587-547f-612de462422d"] {background-color:rgb(255,255,255);}}'
                }}
            />
            <link
                href="https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/667b82b3ebdf20129f1db132_Favi32.png"
                rel="shortcut icon"
                type="image/x-icon"
            />
            <link
                href="https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/667b82b78daec888fae8a645_Favi256.png"
                rel="apple-touch-icon"
            />
            <div className="website-wrapper">
                <div
                    data-w-id="54949870-ffaf-f046-bdad-b19fc6237be3"
                    className="nav-slider--wrapper"
                    style={{}}
                >
                    <div className="nav-menu-slider" style={{}}>
                        <div className="n-m-s--title" style={{}}>
                            Навігація
                        </div>
                        <div
                            data-w-id="54949870-ffaf-f046-bdad-b19fc6237be7"
                            className="menu-line"
                            style={{}}
                        />
                        <div
                            data-w-id="54949870-ffaf-f046-bdad-b19fc6237be8"
                            className="nav-inside-slider-wrapper"
                            style={{}}
                        >
                            <a
                                href="https://digiuni-website.webflow.io/"
                                className="menu-liner-item"
                            >
                                Головна
                            </a>
                            <a
                                href="https://digiuni-website.webflow.io/about"
                                aria-current="page"
                                className="menu-liner-item w--current"
                            >
                                Про нас
                            </a>
                            <a
                                href="https://digiuni-website.webflow.io/news"
                                className="menu-liner-item"
                            >
                                Новини
                            </a>
                            <a
                                href="https://digiuni-website.webflow.io/contacts"
                                className="menu-liner-item"
                            >
                                Контакти
                            </a>
                        </div>
                        <div
                            data-w-id="54949870-ffaf-f046-bdad-b19fc6237bf1"
                            className="social-div-mobile"
                            style={{}}
                        >
                            <a
                                href="https://digiuni-website.webflow.io/about#"
                                className="socila-div-mobile-2 w-inline-block"
                            >
                                <img
                                    src="./About_UK_files/66589b5d3995d609d8c8a804_facebook-icon-w.svg"
                                    loading="lazy"
                                    alt=""
                                    className="facebook-icon-w"
                                />
                            </a>
                            <a
                                href="https://digiuni-website.webflow.io/about#"
                                className="socila-div-mobile-2 w-inline-block"
                            >
                                <img
                                    src="./About_UK_files/66589b6d12ca96414b423a31_linked-icon-w.svg"
                                    loading="lazy"
                                    alt=""
                                    className="linked-iicon-w"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <section
                    data-w-id="6d36b9df-96b4-4587-547f-612de462422d"
                    className="news--about-section"
                    style={{ backgroundColor: "rgb(254, 255, 230)" }}
                >
                    <img
                        src="./About_UK_files/6670873d0ce72108828c6a1e_side-pattern.svg"
                        loading="lazy"
                        data-w-id="468bbde8-fa02-cfbe-d1e9-2a99041d7eab"
                        alt=""
                        className="image-14"
                        style={{ opacity: 1 }}
                    />
                    <div className="nav-mobile-container">
                        <a
                            data-w-id="3c898c40-33f2-0c44-d19f-5765826da8ba"
                            href="https://digiuni-website.webflow.io/"
                            className="navbar-brand w-nav-brand"
                            style={{}}
                        >
                            <img
                                src="./About_UK_files/66565617a6da26c070d6a046_digiuni-logo.svg"
                                loading="lazy"
                                data-w-id="3c898c40-33f2-0c44-d19f-5765826da8bb"
                                alt=""
                                className="logo-mobile"
                                style={{}}
                            />
                            <img
                                src="./About_UK_files/6658a263313869c1460d6e1f_digiuni-logo-w.svg"
                                loading="lazy"
                                data-w-id="3c898c40-33f2-0c44-d19f-5765826da8bc"
                                alt=""
                                className="logo-mobile-w"
                                style={{}}
                            />
                        </a>
                        <div
                            data-w-id="3c898c40-33f2-0c44-d19f-5765826da8bd"
                            className="nav-mobile-right"
                            style={{}}
                        >
                            <div className="languages-mobile">
                                <div
                                    data-w-id="3c898c40-33f2-0c44-d19f-5765826da8bf"
                                    className="language-item"
                                    style={{}}
                                >
                                    УКР
                                </div>
                                <div className="language-item inactive">ENG</div>
                            </div>
                            <div className="nav-button-wrapper">
                                <div
                                    data-w-id="3c898c40-33f2-0c44-d19f-5765826da8c4"
                                    className="nav-button"
                                    style={{}}
                                >
                                    <div
                                        data-w-id="3c898c40-33f2-0c44-d19f-5765826da8c5"
                                        className="menu-line-1"
                                        style={{}}
                                    />
                                    <div
                                        data-w-id="3c898c40-33f2-0c44-d19f-5765826da8c6"
                                        className="menu-line-1"
                                        style={{}}
                                    />
                                    <div
                                        data-w-id="3c898c40-33f2-0c44-d19f-5765826da8c7"
                                        className="menu-line-1"
                                        style={{}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-layout-blockcontainer about-hero-container w-container">
                        <div className="news-heading--wrapper">
                            <div
                                data-w-id="55eb963f-a970-427d-f2dc-e5c24f5d16a7"
                                className="breadcrumbs"
                                style={{ opacity: 1 }}
                            >
                                <a href="https://digiuni-website.webflow.io/" className="bc-home">
                                    Головна
                                </a>
                                <div className="breadcrumbs-vert-line" />
                            </div>
                            <div className="about-header--wrapper">
                                <img
                                    src="./About_UK_files/6689a90f316101b9487d8590_Screenshot 2024-07-06 at 16.27.30.png"
                                    loading="lazy"
                                    alt=""
                                    className="image-19"
                                />
                                <h1
                                    data-w-id="55eb963f-a970-427d-f2dc-e5c24f5d16ab"
                                    className="display-1 main-heading"
                                    style={{
                                        opacity: 1,
                                        transform:
                                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                        transformStyle: "preserve-3d"
                                    }}
                                >
                                    Долучайся до відкритого цифрового освітнього середовища!
                                </h1>
                                <h3
                                    data-w-id="7ee7b024-8d42-8f69-8729-5998ae44ab04"
                                    className="h3 about-heading"
                                    style={{
                                        opacity: 1,
                                        transform:
                                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                        transformStyle: "preserve-3d"
                                    }}
                                >
                                    DigiUni - наймасштабніший проєкт за програмою Erasmus+, який коли
                                    небудь реалізовувався в Україні.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="nav-container-2">
                        <div
                            data-animation="over-right"
                            data-collapse="small"
                            data-duration={400}
                            data-easing="ease"
                            data-easing2="ease"
                            role="banner"
                            className="navbar-desktop w-nav"
                        >
                            <div className="navbar-wrapper">
                                <a
                                    data-w-id="defaea1f-f6df-4e64-db75-e28d54dce69e"
                                    href="https://digiuni-website.webflow.io/"
                                    className="navbar-brand w-nav-brand"
                                    aria-label="home"
                                    style={{
                                        transform:
                                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                        transformStyle: "preserve-3d",
                                        opacity: 1
                                    }}
                                >
                                    <img
                                        src="./About_UK_files/668ff1dd81a6a421589b6d68_digiuini-full-logo-color.svg"
                                        loading="lazy"
                                        alt=""
                                        className="logo-digiuni"
                                    />
                                </a>
                                <div className="nav-right-wrapper">
                                    <div
                                        data-w-id="78bbedbb-76b5-961c-80dc-983e26562da1"
                                        className="languages"
                                        style={{ opacity: 1 }}
                                    >
                                        <div className="language-item">УКР</div>
                                        <div className="language-item inactive">ENG</div>
                                    </div>
                                    <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
                                        <ul role="list" className="nav-menu w-list-unstyled">
                                            <li
                                                data-w-id="78bbedbb-76b5-961c-80dc-983e26562da8"
                                                className="nav-item-home"
                                                style={{
                                                    opacity: 1,
                                                    transform:
                                                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                    transformStyle: "preserve-3d"
                                                }}
                                            >
                                                <div className="arrow--menu-home w-embed">
                                                    <svg
                                                        width="auto"
                                                        height="auto"
                                                        viewBox="0 0 220 82"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M220 35V47H208V58H196V46H0V36H196V24H208V35H220Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M196 12H184V24H196V12Z" fill="currentColor" />
                                                        <path d="M184 0H172V12H184V0Z" fill="currentColor" />
                                                        <path d="M196 58H184V70H196V58Z" fill="currentColor" />
                                                        <path d="M184 70H172V82H184V70Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <a
                                                    href="https://digiuni-website.webflow.io/"
                                                    className="menu-item"
                                                >
                                                    Головна
                                                </a>
                                            </li>
                                            <li
                                                data-w-id="78bbedbb-76b5-961c-80dc-983e26562dac"
                                                className="nav-item-about"
                                                style={{
                                                    opacity: 1,
                                                    transform:
                                                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                    transformStyle: "preserve-3d"
                                                }}
                                            >
                                                <div
                                                    data-w-id="efc8b400-41f7-b5d9-ef0f-b357f9b5dc5a"
                                                    className="arrow--menu-about w-embed"
                                                    style={{ opacity: 1 }}
                                                >
                                                    <svg
                                                        width="auto"
                                                        height="auto"
                                                        viewBox="0 0 220 82"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M220 35V47H208V58H196V46H0V36H196V24H208V35H220Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M196 12H184V24H196V12Z" fill="currentColor" />
                                                        <path d="M184 0H172V12H184V0Z" fill="currentColor" />
                                                        <path d="M196 58H184V70H196V58Z" fill="currentColor" />
                                                        <path d="M184 70H172V82H184V70Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <a
                                                    href="https://digiuni-website.webflow.io/about"
                                                    aria-current="page"
                                                    className="menu-item w--current"
                                                >
                                                    Про нас
                                                </a>
                                            </li>
                                            <li
                                                data-w-id="78bbedbb-76b5-961c-80dc-983e26562daf"
                                                className="nav-item-news"
                                                style={{
                                                    opacity: 1,
                                                    transform:
                                                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                    transformStyle: "preserve-3d"
                                                }}
                                            >
                                                <div className="arrow--menu-news w-embed">
                                                    <svg
                                                        width="auto"
                                                        height="auto"
                                                        viewBox="0 0 220 82"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M220 35V47H208V58H196V46H0V36H196V24H208V35H220Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M196 12H184V24H196V12Z" fill="currentColor" />
                                                        <path d="M184 0H172V12H184V0Z" fill="currentColor" />
                                                        <path d="M196 58H184V70H196V58Z" fill="currentColor" />
                                                        <path d="M184 70H172V82H184V70Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <a
                                                    href="https://digiuni-website.webflow.io/news"
                                                    className="menu-item"
                                                >
                                                    Новини
                                                </a>
                                            </li>
                                            <li
                                                data-w-id="78bbedbb-76b5-961c-80dc-983e26562db2"
                                                className="nav-item-contacts"
                                                style={{
                                                    opacity: 1,
                                                    transform:
                                                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                    transformStyle: "preserve-3d"
                                                }}
                                            >
                                                <div
                                                    data-w-id="35543bc8-919f-060f-0aa6-f0499b3d218c"
                                                    className="arrow--menu-contacts w-embed"
                                                >
                                                    <svg
                                                        width="auto"
                                                        height="auto"
                                                        viewBox="0 0 220 82"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M220 35V47H208V58H196V46H0V36H196V24H208V35H220Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M196 12H184V24H196V12Z" fill="currentColor" />
                                                        <path d="M184 0H172V12H184V0Z" fill="currentColor" />
                                                        <path d="M196 58H184V70H196V58Z" fill="currentColor" />
                                                        <path d="M184 70H172V82H184V70Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <a
                                                    href="https://digiuni-website.webflow.io/contacts"
                                                    className="menu-item"
                                                >
                                                    Контакти
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div
                                className="w-nav-overlay"
                                data-wf-ignore=""
                                id="w-nav-overlay-0"
                            />
                        </div>
                    </div>
                </section>
                <div
                    data-w-id="4bca574b-93b4-5d70-2b24-f49a05ee80ed"
                    className="nav-between-container"
                    style={{ backgroundColor: "rgb(254, 255, 230)" }}
                >
                    <div
                        data-w-id="fdeb1115-b3c7-1201-03ee-959c86c605f6"
                        className="w-layout-grid nbc-upper-grid"
                        style={{ opacity: 1 }}
                    >
                        <div
                            id="w-node-_2f531c49-4853-5b73-31ae-273ad0e69496-71f4f6fc"
                            className="nbc-upper-grid-item"
                        >
                            <div className="nbc-number">01</div>
                        </div>
                        <div
                            id="w-node-b7abc6da-7a24-8a4c-4b16-94338110661c-71f4f6fc"
                            className="nbc-upper-grid-item"
                        >
                            <div className="nbc-number">02</div>
                        </div>
                        <div
                            id="w-node-_36902569-56ae-60c2-9f51-e1863530c95f-71f4f6fc"
                            className="nbc-upper-grid-item"
                        >
                            <div className="nbc-number">03</div>
                        </div>
                        <div
                            id="w-node-_0bd6a4c0-8bea-d076-4509-0bc4873a07e0-71f4f6fc"
                            className="nbc-upper-grid-item"
                        >
                            <div className="nbc-number">04</div>
                        </div>
                        <div
                            id="w-node-_8004401b-2014-7a5a-2d28-0457fb33e6ea-71f4f6fc"
                            className="nbc-upper-grid-item"
                        >
                            <div className="nbc-number">05</div>
                        </div>
                        <div
                            id="w-node-_0fe5d3d9-b8dd-495f-0b6e-1ea39099e110-71f4f6fc"
                            className="nbc-upper-grid-item"
                        >
                            <div className="nbc-number">06</div>
                        </div>
                        <div
                            id="w-node-cf0f7756-ccf9-b4b7-4241-9d3413b4d807-71f4f6fc"
                            className="nbc-upper-grid-item"
                        >
                            <div className="nbc-number">07</div>
                        </div>
                    </div>
                </div>
                <div className="pixels-pattern-holder">
                    <img
                        src="./About_UK_files/6672f61f5e48d3fb368548f1_pixel-art-5.jpg"
                        loading="lazy"
                        data-w-id="d2b0a421-5869-8e82-a786-763e6ce70c50"
                        alt=""
                        className="pixels-pattern-wrapper-mob"
                        style={{}}
                    />
                    <img
                        src="./About_UK_files/6670e484b4672be0d335270e_pixel-art-1.svg"
                        loading="lazy"
                        data-w-id="98a1eb3b-b205-929c-e4c8-e5bb09870db7"
                        alt=""
                        className="pixels-pattern-wrapper"
                        style={{
                            opacity: 1,
                            transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d"
                        }}
                    />
                </div>
                <div className="nav-between-container-2">
                    <div
                        data-w-id="69f9d803-97d3-c179-231e-d0a808b3362d"
                        className="w-layout-grid nbc-upper-grid"
                        style={{ opacity: 1 }}
                    >
                        <div
                            id="w-node-_69f9d803-97d3-c179-231e-d0a808b3362e-71f4f6fc"
                            className="nbc-lower-grid-item"
                        >
                            <div className="nbc-title">Про проєкт</div>
                        </div>
                        <div
                            id="w-node-_69f9d803-97d3-c179-231e-d0a808b33631-71f4f6fc"
                            className="nbc-lower-grid-item"
                        >
                            <div className="nbc-title">Мета проєкту</div>
                        </div>
                        <div
                            id="w-node-_69f9d803-97d3-c179-231e-d0a808b33634-71f4f6fc"
                            className="nbc-lower-grid-item"
                        >
                            <div className="nbc-title">Конкретні цілі</div>
                        </div>
                        <div
                            id="w-node-_69f9d803-97d3-c179-231e-d0a808b33637-71f4f6fc"
                            className="nbc-lower-grid-item"
                        >
                            <div className="nbc-title">Цільові групи</div>
                        </div>
                        <div
                            id="w-node-_69f9d803-97d3-c179-231e-d0a808b3363a-71f4f6fc"
                            className="nbc-lower-grid-item"
                        >
                            <div className="nbc-title">Команда</div>
                        </div>
                        <div
                            id="w-node-_69f9d803-97d3-c179-231e-d0a808b3363d-71f4f6fc"
                            className="nbc-lower-grid-item"
                        >
                            <div className="nbc-title">Партнери</div>
                        </div>
                        <div
                            id="w-node-_69f9d803-97d3-c179-231e-d0a808b33640-71f4f6fc"
                            className="nbc-lower-grid-item"
                        >
                            <div className="nbc-title">Таймлайн проєкту</div>
                        </div>
                    </div>
                </div>
                <div
                    data-w-id="b825fea4-e8bf-5a64-8ce5-728a9e357b74"
                    className="w-layout-blockcontainer about-container about-page _1920 w-container"
                    style={{ opacity: 1 }}
                >
                    <div className="in-container-wrapper">
                        <div className="section-title">
                            <div className="text-title-1 bp2">01</div>
                            <div className="frame-107">
                                <img
                                    src="./About_UK_files/6650009b1791de600fc19b44_Vectors-Wrapper.svg"
                                    loading="lazy"
                                    width={48}
                                    height="1.0000041723251343"
                                    alt=""
                                    className="vectors-wrapper"
                                />
                                <div className="text-title-1 bp2">Про проект</div>
                            </div>
                        </div>
                        <div className="in-container-wrapper">
                            <h2 className="h2 section-heading">Про проєкт</h2>
                            <div className="section-paragraph-holder">
                                <p className="text-paragraph-2">
                                    Проєкт Erasmus+ CBHE DigiUni, повною назвою "Цифровий університет
                                    – Відкрита українська ініціатива", є важливою ініціативою,
                                    спрямованою на підтримку вищої освіти в Україні в умовах воєнного
                                    стану та післявоєнного відновлення. Наразі, це наймасштабніший
                                    проєкт за програмою Erasmus+, який коли небудь реалізовувався в
                                    Україні.
                                    <br />
                                    <br />
                                    Цей проєкт був розроблений у відповідь на безпрецедентні виклики,
                                    пов'язані з повномасштабним вторгненням росії в Україну, та має на
                                    меті гармонізувати процеси цифрової трансформації в освіті,
                                    створюючи єдину цифрову освітню екосистему для забезпечення
                                    безперервної, високоякісної, інклюзивної та прозорої освіти​​​​.
                                    Проєкт підкреслює важливість діджиталізації для безперервності та
                                    успіху навчальних закладів в Україні. Він має на меті використати
                                    досвід європейських університетів у розробці інтегрованих цифрових
                                    рішень та сприяти співпраці між українськими та європейськими
                                    партнерами.
                                    <br />
                                    <br />У 2023 році Європейська Комісія відкрила спеціальне вікно
                                    для України в рамках програми Еразмус+ у відповідь на виклики, з
                                    якими зіштовхнулась українська вища освіта через повномасштабне
                                    вторгнення росії та його наслідки.Міністерство освіти і науки
                                    України спільно з українськими університетами-партнерами працювало
                                    над пропозицією, яка б поєднувала системний підхід, широкий вплив
                                    та співпрацю усіх українських ЗВО. За результатами відбору проєкт
                                    DigiUni став переможцем, а європейські партнери його підтримали.
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-wrapper _3">
                    <div className="w-layout-grid _3-items-about-grid">
                        <div
                            id="w-node-ef460f5a-70d9-9145-bfef-026b3072337c-71f4f6fc"
                            className="griad-about-item-holder"
                        >
                            <img
                                src="./About_UK_files/668b03c90a0c07b3373b0c16_about-card-4.svg"
                                loading="lazy"
                                id="w-node-ef460f5a-70d9-9145-bfef-026b3072337d-71f4f6fc"
                                alt=""
                                className="grid-about-img"
                            />
                        </div>
                        <div
                            id="w-node-ef460f5a-70d9-9145-bfef-026b3072337e-71f4f6fc"
                            className="griad-about-item-holder"
                        >
                            <img
                                src="./About_UK_files/668aecf7134dc172d65230b5_about-card-2.svg"
                                loading="lazy"
                                id="w-node-ef460f5a-70d9-9145-bfef-026b3072337f-71f4f6fc"
                                alt=""
                                className="grid-about-img"
                            />
                        </div>
                        <div
                            id="w-node-ef460f5a-70d9-9145-bfef-026b30723380-71f4f6fc"
                            className="griad-about-item-holder"
                        >
                            <img
                                src="./About_UK_files/668aed0542e8356125700981_about-card-3.svg"
                                loading="lazy"
                                id="w-node-ef460f5a-70d9-9145-bfef-026b30723381-71f4f6fc"
                                alt=""
                                className="grid-about-img"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-layout-blockcontainer about-container about-page after-cards w-container">
                    <div className="in-container-wrapper">
                        <div className="section-paragraph-holder">
                            <p className="text-paragraph-2">
                                Проєкт реалізує консорціум українських й європейських університетів
                                та інституцій (детальніше – у розділах Учасники й Партнери).
                                <br />
                                <br />
                                Компетентні національні органи влади (Міністерство освіти і науки
                                України, Міністерство цифрової трансформації України, Національне
                                агентство із забезпечення якості вищої освіти), ЗВО,
                                бізнес-асоціації та стейкхолдери працюватимуть разом у рамках
                                DigiUni для взаємного навчання між органами державної влади з метою:
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid-holder about-page">
                    <div className="grid-wrapper-hor">
                        <div className="grid-item-single _4">
                            <div className="grid-frame-single _2 _02">
                                <div className="icon-holder-2 w">
                                    <img
                                        src="./About_UK_files/666f866d4485e729bdf0cb18_arrow-icon-s.svg"
                                        loading="lazy"
                                        alt=""
                                        className="image-13 arrow"
                                    />
                                </div>
                                <div className="bullet-point-text-wrapper">
                                    <div className="h5 bullet-point">
                                        Сприяння <strong>системному вдосконаленню</strong> та інноваціям
                                        у секторі вищої освіти;
                                    </div>
                                </div>
                            </div>
                            <div className="grid-frame-single _2 _02">
                                <div className="icon-holder-2 w">
                                    <img
                                        src="./About_UK_files/666f866d4485e729bdf0cb18_arrow-icon-s.svg"
                                        loading="lazy"
                                        alt=""
                                        className="image-13 arrow"
                                    />
                                </div>
                                <div className="bullet-point-text-wrapper">
                                    <div className="h5 bullet-point">
                                        <strong>Розвитку</strong> інклюзивної системи вищої освіти для
                                        забезпечення належних умов для студентів з різним походженням та
                                        меншими можливостями доступу до навчання та досягнення успіху в
                                        навчанні;
                                    </div>
                                </div>
                            </div>
                            <div className="grid-frame-single _2 _02">
                                <div className="icon-holder-2 w">
                                    <img
                                        src="./About_UK_files/666f866d4485e729bdf0cb18_arrow-icon-s.svg"
                                        loading="lazy"
                                        alt=""
                                        className="image-13 arrow"
                                    />
                                </div>
                                <div className="bullet-point-text-wrapper">
                                    <div className="h5 bullet-point">
                                        <strong>Модернізації</strong> управління та фінансування системи
                                        вищої освіти в Україні;
                                    </div>
                                </div>
                            </div>
                            <div className="grid-frame-single _2 _02">
                                <div className="icon-holder-2 w">
                                    <img
                                        src="./About_UK_files/666f866d4485e729bdf0cb18_arrow-icon-s.svg"
                                        loading="lazy"
                                        alt=""
                                        className="image-13 arrow"
                                    />
                                </div>
                                <div className="bullet-point-text-wrapper">
                                    <div className="h5 bullet-point">
                                        <strong>Підвищення потенціалу</strong> ЗВО України шляхом
                                        синергії з поточними ініціативами ЄС, включаючи Еразмус+.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-layout-blockcontainer about-container about-page _2 w-container">
                    <div className="in-container-wrapper">
                        <div className="section-paragraph-holder">
                            <p className="text-paragraph-2 about">
                                Усі члени консорціуму прагнуть відіграти свою роль у створенні
                                високоефективної цифрової освітньої екосистеми, яка може забезпечити
                                безперервність та ефективність їхньої академічної діяльності, щоб
                                продовжувати залучати всіх студентів та підвищувати їхню здатність
                                до працевлаштування в умовах економіки, що базується на знаннях.
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-layout-blockcontainer about-container about-page w-container">
                    <div className="in-container-wrapper">
                        <div className="section-title">
                            <div className="text-title-1 bp2">02</div>
                            <div className="frame-107">
                                <img
                                    src="./About_UK_files/6650009b1791de600fc19b44_Vectors-Wrapper.svg"
                                    loading="lazy"
                                    width={48}
                                    height="1.0000041723251343"
                                    alt=""
                                    className="vectors-wrapper"
                                />
                                <div className="text-title-1 bp2">Мета проєкту</div>
                            </div>
                        </div>
                        <div className="in-container-wrapper">
                            <h2 className="h2 section-heading">Мета, цілі проєкту</h2>
                        </div>
                    </div>
                </div>
                <div className="grid-holder about-page vert">
                    <div className="grid-wrapper-vert">
                        <div className="grid-item-hor">
                            <div className="icon-holder _2">
                                <div className="bullet-number-big">Мета 1</div>
                            </div>
                            <div className="grid-frame meta">
                                <div className="text-paragraph-2 about">
                                    Розвиток високоефективної цифрової освітньої екосистеми в Україні
                                    для забезпечення безперервної, якісної, інклюзивної та прозорої
                                    освіти, незалежно від місцезнаходження студента та викладача,
                                    використовуючи існуючі цифрові інновації в галузі освіти та
                                    зрозумілу парадигму залучення майбутніх інновацій, розвиток
                                    цілісної та сталої системи вищої освіти для задоволення
                                    соціально-економічних потреб та великих амбіцій до економіки,
                                    заснованої на знаннях.
                                </div>
                            </div>
                        </div>
                        <div className="grid-item-hor">
                            <div className="icon-holder _2">
                                <div className="bullet-number-big">Мета 2</div>
                            </div>
                            <div className="grid-frame meta">
                                <div className="text-paragraph-2 about">
                                    Оцифрування методів викладання і навчання та забезпечення
                                    інфраструктури, необхідної для онлайн та інклюзивної освіти.
                                </div>
                            </div>
                        </div>
                        <div className="grid-item-hor">
                            <div className="icon-holder _2">
                                <div className="bullet-number-big">Мета 3</div>
                            </div>
                            <div className="grid-frame meta _3">
                                <div className="text-paragraph-2 about">
                                    Сприяти поступовій синхронізації українських та європейських
                                    університетів відповідно до цінностей, стандартів і пріоритетів
                                    Європейського простору вищої освіти, а також у перспективі
                                    майбутнього вступу України до Європейського Союзу (ЄС). Проєкт має
                                    на меті сприяти прояву європейської солідарності за принципом
                                    «знизу-вгору» на міжінституційній основі та з орієнтацією на
                                    результат, у поєднанні з різними рівнями прийняття політичних
                                    рішень.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-layout-blockcontainer about-container about-page w-container">
                    <div className="in-container-wrapper">
                        <div className="section-title">
                            <div className="text-title-1 bp2">03</div>
                            <div className="frame-107">
                                <img
                                    src="./About_UK_files/6650009b1791de600fc19b44_Vectors-Wrapper.svg"
                                    loading="lazy"
                                    width={48}
                                    height="1.0000041723251343"
                                    alt=""
                                    className="vectors-wrapper"
                                />
                                <div className="text-title-1 bp2">Конкретні цілі</div>
                            </div>
                        </div>
                        <div className="in-container-wrapper">
                            <h2 className="h2 section-heading">
                                Конкретні цілі проєкту DigiUni:
                            </h2>
                            <div className="section-paragraph-holder">
                                <div className="bullets-list-wrapper">
                                    <div className="bullet-list-item">
                                        <img
                                            src="./About_UK_files/666f9e1d4b3322aa44bdb3c7_arrow-icon-bullet-1.svg"
                                            loading="lazy"
                                            alt=""
                                            className="bullet-icon-arrow"
                                        />
                                        <div className="text-paragraph-2">
                                            Розробити концепцію, стратегію та план дій зі створення
                                            інтегрованої та інклюзивної цифрової освітньої екосистеми в
                                            Україні та подати їх на затвердження на державному рівні;
                                        </div>
                                    </div>
                                    <div className="bullet-list-item">
                                        <img
                                            src="./About_UK_files/666f9e1d4b3322aa44bdb3c7_arrow-icon-bullet-1.svg"
                                            loading="lazy"
                                            alt=""
                                            className="bullet-icon-arrow"
                                        />
                                        <div className="text-paragraph-2">
                                            Розробити та запустити всеукраїнське цифрове освітнє
                                            середовище - Цифрову платформу <strong>(DigiPlatform)</strong>
                                            ;
                                        </div>
                                    </div>
                                    <div className="bullet-list-item">
                                        <img
                                            src="./About_UK_files/666f9e1d4b3322aa44bdb3c7_arrow-icon-bullet-1.svg"
                                            loading="lazy"
                                            alt=""
                                            className="bullet-icon-arrow"
                                        />
                                        <div className="text-paragraph-2">
                                            Розвиток DigiUni як пілотного організаційного механізму для
                                            об’єднання, трансформації та інтеграції ЗВО та інших
                                            зацікавлених інституцій для досягнення спільної мети, що
                                            включає створення Відкритої Хартії DigiUni-Україна;
                                        </div>
                                    </div>
                                    <div className="bullet-list-item">
                                        <img
                                            src="./About_UK_files/666f9e1d4b3322aa44bdb3c7_arrow-icon-bullet-1.svg"
                                            loading="lazy"
                                            alt=""
                                            className="bullet-icon-arrow"
                                        />
                                        <div className="text-paragraph-2">
                                            Розробити правила забезпечення та підвищення якості цифрового
                                            контенту у вищих навчальних закладах України, методи оцінки
                                            якості цифрового контенту, розробити методологію та
                                            рекомендації щодо створення цифрового контенту та цифрових
                                            курсів;
                                        </div>
                                    </div>
                                    <div className="bullet-list-item">
                                        <img
                                            src="./About_UK_files/666f9e1d4b3322aa44bdb3c7_arrow-icon-bullet-1.svg"
                                            loading="lazy"
                                            alt=""
                                            className="bullet-icon-arrow"
                                        />
                                        <div className="text-paragraph-2">
                                            Розбудова інфраструктури та інструментів проєкту: створення
                                            Цифрових центрів <strong>(DigiCentres)</strong> у кожному
                                            українському закладі вищої освіти-партнері з необхідним
                                            програмним забезпеченням та обладнанням;
                                        </div>
                                    </div>
                                    <div className="bullet-list-item">
                                        <img
                                            src="./About_UK_files/666f9e1d4b3322aa44bdb3c7_arrow-icon-bullet-1.svg"
                                            loading="lazy"
                                            alt=""
                                            className="bullet-icon-arrow"
                                        />
                                        <div className="text-paragraph-2">
                                            Розробити первинне наповнення Цифрової платформи, зокрема,
                                            повний перелік наявних цифрових курсів та інших цифрових
                                            матеріалів українських ЗВО-партнерів з прямими посиланнями на
                                            цифрові ресурси свого університету; розмістити та/або створити
                                            на платформі прямі посилання на цифрові курси/ресурси
                                            європейських партнерів, до яких вони готові надати українській
                                            аудиторії вільний доступ;
                                        </div>
                                    </div>
                                    <div className="bullet-list-item">
                                        <img
                                            src="./About_UK_files/666f9e1d4b3322aa44bdb3c7_arrow-icon-bullet-1.svg"
                                            loading="lazy"
                                            alt=""
                                            className="bullet-icon-arrow"
                                        />
                                        <div className="text-paragraph-2">
                                            Розробити 100+ нових курсів у різних галузях знань, 20 з яких
                                            включатимуть використання віртуальної та/або доповненої
                                            реальності та/або віртуальних/віддалених лабораторій;
                                            вбудувати та/або створити віртуальні та віддалені лабораторії;
                                        </div>
                                    </div>
                                    <div className="bullet-list-item">
                                        <img
                                            src="./About_UK_files/666f9e1d4b3322aa44bdb3c7_arrow-icon-bullet-1.svg"
                                            loading="lazy"
                                            alt=""
                                            className="bullet-icon-arrow"
                                        />
                                        <div className="text-paragraph-2">
                                            Локалізувати 20+ курсів партнерів з ЄС та опублікувати їх на
                                            Цифровій платформі;
                                        </div>
                                    </div>
                                    <div className="bullet-list-item">
                                        <img
                                            src="./About_UK_files/666f9e1d4b3322aa44bdb3c7_arrow-icon-bullet-1.svg"
                                            loading="lazy"
                                            alt=""
                                            className="bullet-icon-arrow"
                                        />
                                        <div className="text-paragraph-2">
                                            Створити 20 окремих навчальних модулів та 30 модулів
                                            мікронавчання для неуніверситетської аудиторії;
                                        </div>
                                    </div>
                                    <div className="bullet-list-item">
                                        <img
                                            src="./About_UK_files/666f9e1d4b3322aa44bdb3c7_arrow-icon-bullet-1.svg"
                                            loading="lazy"
                                            alt=""
                                            className="bullet-icon-arrow"
                                        />
                                        <div className="text-paragraph-2">
                                            Підготувати 600 викладачів як викладачів цифрового контенту,
                                            30 - як адміністраторів контенту та 40 - як фахівців з оцінки
                                            якості контенту;
                                        </div>
                                    </div>
                                    <div className="bullet-list-item">
                                        <img
                                            src="./About_UK_files/666f9e1d4b3322aa44bdb3c7_arrow-icon-bullet-1.svg"
                                            loading="lazy"
                                            alt=""
                                            className="bullet-icon-arrow"
                                        />
                                        <div className="text-paragraph-2">
                                            Забезпечити 5,000+ студентів курсами та 1,000+ осіб, які не є
                                            студентами, освітніми модулями з використанням Цифрової
                                            платформи в рамках пілотного проєкту DigiUni;
                                        </div>
                                    </div>
                                    <div className="bullet-list-item">
                                        <img
                                            src="./About_UK_files/666f9e1d4b3322aa44bdb3c7_arrow-icon-bullet-1.svg"
                                            loading="lazy"
                                            alt=""
                                            className="bullet-icon-arrow"
                                        />
                                        <div className="text-paragraph-2">
                                            Реалізувати 20+ прикладів віртуальної мобільності студентів
                                            серед партнерських ЗВО України.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-div">
                    <img
                        src="./About_UK_files/6675bc0a555846d8171353b3_pixel-banner.svg"
                        loading="lazy"
                        alt=""
                        className="banner-pattern-image"
                    />
                    <div className="in-banner-wrapper">
                        <div className="banner-text--wrapper">
                            <img
                                src="./About_UK_files/66565617a6da26c070d6a046_digiuni-logo.svg"
                                loading="lazy"
                                alt=""
                                className="image-18"
                            />
                            <div className="title-banner">
                                DigiUni -<br />
                                сучасна цифрова освіта для кожного!
                            </div>
                        </div>
                        <img
                            src="./About_UK_files/6675bc3172bfa1090f8c6a1e_girl-banner.webp"
                            loading="lazy"
                            sizes="(max-width: 479px) 86vw, (max-width: 1439px) 34vw, (max-width: 1919px) 33vw, 23vw"
                            srcSet="https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/6675bc3172bfa1090f8c6a1e_girl-banner-p-500.webp 500w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/6675bc3172bfa1090f8c6a1e_girl-banner.webp 713w"
                            alt=""
                            className="image-17"
                        />
                    </div>
                </div>
                <div className="w-layout-blockcontainer about-container about-page w-container">
                    <div className="in-container-wrapper">
                        <div className="section-title">
                            <div className="text-title-1 bp2">04</div>
                            <div className="frame-107">
                                <img
                                    src="./About_UK_files/6650009b1791de600fc19b44_Vectors-Wrapper.svg"
                                    loading="lazy"
                                    width={48}
                                    height="1.0000041723251343"
                                    alt=""
                                    className="vectors-wrapper"
                                />
                                <div className="text-title-1 bp2">Цільові групи</div>
                            </div>
                        </div>
                        <div className="in-container-wrapper">
                            <h2 className="h2 section-heading">
                                Цільовими групами проєкту DigiUni є:
                            </h2>
                            <div className="section-paragraph-holder">
                                <div className="bullets-list-wrapper">
                                    <div className="bullet-list-item">
                                        <img
                                            src="./About_UK_files/666f9e1d4b3322aa44bdb3c7_arrow-icon-bullet-1.svg"
                                            loading="lazy"
                                            alt=""
                                            className="bullet-icon-arrow"
                                        />
                                        <div className="text-paragraph-2">
                                            Cтуденти ЗВО, закладів загальної середньої освіти та фахової
                                            передвищої освіти;
                                        </div>
                                    </div>
                                    <div className="bullet-list-item">
                                        <img
                                            src="./About_UK_files/666f9e1d4b3322aa44bdb3c7_arrow-icon-bullet-1.svg"
                                            loading="lazy"
                                            alt=""
                                            className="bullet-icon-arrow"
                                        />
                                        <div className="text-paragraph-2">
                                            Bикладачі ЗВО України, які мають навчитися працювати в
                                            новітньому цифровому середовищі, створювати новий цифровий
                                            контент та використовувати вже існуючий, у тому числі наданий
                                            іншими закладами вищої освіти України та партнерами з ЄС;
                                        </div>
                                    </div>
                                    <div className="bullet-list-item">
                                        <img
                                            src="./About_UK_files/666f9e1d4b3322aa44bdb3c7_arrow-icon-bullet-1.svg"
                                            loading="lazy"
                                            alt=""
                                            className="bullet-icon-arrow"
                                        />
                                        <div className="text-paragraph-2">
                                            Ветерани, тимчасово переміщені особи, особи, які постраждали
                                            внаслідок воєнних дій в Україні та потребують перекваліфікації
                                            для працевлаштування;
                                        </div>
                                    </div>
                                    <div className="bullet-list-item">
                                        <img
                                            src="./About_UK_files/666f9e1d4b3322aa44bdb3c7_arrow-icon-bullet-1.svg"
                                            loading="lazy"
                                            alt=""
                                            className="bullet-icon-arrow"
                                        />
                                        <div className="text-paragraph-2">
                                            Особи з обмеженими освітніми можливостями, які бажають здобути
                                            вищу освіту або підвищити свою кваліфікацію;
                                        </div>
                                    </div>
                                    <div className="bullet-list-item">
                                        <img
                                            src="./About_UK_files/666f9e1d4b3322aa44bdb3c7_arrow-icon-bullet-1.svg"
                                            loading="lazy"
                                            alt=""
                                            className="bullet-icon-arrow"
                                        />
                                        <div className="text-paragraph-2">
                                            Особи, зацікавлені у професійному та особистісному розвитку,
                                            отриманні мікрокредитів за гнучкою навчальною програмою.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-layout-blockcontainer about-container about-page _3 w-container">
                    <div className="in-container-wrapper">
                        <div className="section-title">
                            <div className="text-title-1 bp2">05</div>
                            <div className="frame-107">
                                <img
                                    src="./About_UK_files/6650009b1791de600fc19b44_Vectors-Wrapper.svg"
                                    loading="lazy"
                                    width={48}
                                    height="1.0000041723251343"
                                    alt=""
                                    className="vectors-wrapper"
                                />
                                <div className="text-title-1 bp2">Команда</div>
                            </div>
                        </div>
                        <div className="in-container-wrapper">
                            <h2 className="h2 section-heading">Координатори проєкту:</h2>
                        </div>
                    </div>
                </div>
                <div className="grid-holder about-page team">
                    <div className="grid-wrapper-vert">
                        <div className="grid-item-hor">
                            <div className="grid-frame meta-team _2">
                                <img
                                    src="./About_UK_files/668b145b9c5572bfad51b69e_ksenia-smirnova.webp"
                                    loading="lazy"
                                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 13vw, (max-width: 991px) 16vw, (max-width: 1279px) 14vw, (max-width: 1439px) 15vw, (max-width: 1919px) 17vw, 14vw"
                                    srcSet="https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/668b145b9c5572bfad51b69e_ksenia-smirnova-p-500.webp 500w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/668b145b9c5572bfad51b69e_ksenia-smirnova.webp 512w"
                                    alt=""
                                    className="team-photo"
                                />
                                <div className="team-coordinator-text">
                                    <div className="team-coordinator-name-title-div">
                                        <h3 className="h3 team-name">
                                            Ксенія
                                            <br />
                                            Смирнова, PhD
                                        </h3>
                                        <div className="text-title-1">Координатор проєкту</div>
                                    </div>
                                    <div className="team-coordinator-about">
                                        <p className="text-paragraph-2">
                                            Проректор з науково-педагогічної роботи (міжнародне
                                            співробітництво) Київський національний університет імені
                                            Тараса Шевченка.
                                        </p>
                                        <p className="text-paragraph-3">
                                            Доктор юридичних наук, професор. Член Центру передового
                                            досвіду Жан Монне. Член Європейської консультативної ради з
                                            досліджень (ERAC) SpringerNature
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-frame meta-team">
                                <img
                                    src="./About_UK_files/668b147337148c85227f9e41_sergiy-bronin.webp"
                                    loading="lazy"
                                    alt=""
                                    className="team-photo"
                                />
                                <div className="team-coordinator-text">
                                    <div className="team-coordinator-name-title-div">
                                        <h3 className="h3 team-name">
                                            Сергій
                                            <br />
                                            Бронін, PhD
                                        </h3>
                                        <div className="text-title-1">Координатор проєкту</div>
                                    </div>
                                    <div className="team-coordinator-about">
                                        <p className="text-paragraph-2">
                                            Доцент кафедри інформаційних систем та технологій, факультет
                                            інформаційних технологій Київський національний університет
                                            імені Тараса Шевченка.
                                        </p>
                                        <p className="text-paragraph-3">
                                            Професійно займається управлінням проектами у сфері освіти та
                                            науки з 2004 року. Координував (виступав як менеджер проекту)
                                            4+ європейські проекти: TEMPUS, Erasmus + CBHE JP, Erasmus +
                                            CBHE SP: iCo-op – співпраця між університетами та
                                            промисловістю; SEHUD – сталий розвиток міст; GameHub –
                                            навчання розробці компʼютерних ігор, dComFra – рамки цифрових
                                            компетентностей для українських вчителів та інших громадян.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-grid-wrapper">
                    <h2 className="h2 section-heading">Команда проєкту:</h2>
                    <div className="w-layout-grid team-grid">
                        <div
                            id="w-node-_7480f5c8-0463-2e13-ef64-794a9ad722b6-71f4f6fc"
                            className="team-card"
                        >
                            <img
                                src="./About_UK_files/666fac82426910a7be36be87_img-0094.webp"
                                loading="lazy"
                                alt=""
                                className="team-photo s"
                            />
                            <div className="team-card-text">
                                <div className="team-coordinator-name-title-div">
                                    <h3 className="h4 name">
                                        Ксенія
                                        <br />
                                        Смирнова, PhD
                                    </h3>
                                    <div className="text-title-1">Координатор проєкту</div>
                                </div>
                                <p className="text-paragraph-3">
                                    Професор Департаменту Інформаційних систем та технологій,
                                    Факультет Інформаційних Технологій, Київський національний
                                    університет імені Тараса Шевченка
                                </p>
                            </div>
                        </div>
                        <div
                            id="w-node-_88b98f68-adac-fb53-b75b-a43430b0ce2f-71f4f6fc"
                            className="team-card"
                        >
                            <img
                                src="./About_UK_files/666fac82426910a7be36be87_img-0094.webp"
                                loading="lazy"
                                alt=""
                                className="team-photo s"
                            />
                            <div className="team-card-text">
                                <div className="team-coordinator-name-title-div">
                                    <h3 className="h4 name">
                                        Сергій
                                        <br />
                                        Бронін, PhD
                                    </h3>
                                    <div className="text-title-1">Координатор проєкту</div>
                                </div>
                                <p className="text-paragraph-3">
                                    Професор Департаменту Інформаційних систем та технологій,
                                    Факультет Інформаційних Технологій, Київський національний
                                    університет імені Тараса Шевченка
                                </p>
                            </div>
                        </div>
                        <div
                            id="w-node-d7e43646-acf4-0d01-3059-5015de836a5c-71f4f6fc"
                            className="team-card"
                        >
                            <img
                                src="./About_UK_files/666fac82426910a7be36be87_img-0094.webp"
                                loading="lazy"
                                alt=""
                                className="team-photo s"
                            />
                            <div className="team-card-text">
                                <div className="team-coordinator-name-title-div">
                                    <h3 className="h4 name">
                                        Сергій
                                        <br />
                                        Бронін, PhD
                                    </h3>
                                    <div className="text-title-1">Координатор проєкту</div>
                                </div>
                                <p className="text-paragraph-3">
                                    Професор Департаменту Інформаційних систем та технологій,
                                    Факультет Інформаційних Технологій, Київський національний
                                    університет імені Тараса Шевченка
                                </p>
                            </div>
                        </div>
                        <div
                            id="w-node-_5a082e30-17ec-01b3-3b5d-7eb32bdd5bae-71f4f6fc"
                            className="team-card"
                        >
                            <img
                                src="./About_UK_files/666fac82426910a7be36be87_img-0094.webp"
                                loading="lazy"
                                alt=""
                                className="team-photo s"
                            />
                            <div className="team-card-text">
                                <div className="team-coordinator-name-title-div">
                                    <h3 className="h4 name">
                                        Сергій
                                        <br />
                                        Бронін, PhD
                                    </h3>
                                    <div className="text-title-1">Координатор проєкту</div>
                                </div>
                                <p className="text-paragraph-3">
                                    Професор Департаменту Інформаційних систем та технологій,
                                    Факультет Інформаційних Технологій, Київський національний
                                    університет імені Тараса Шевченка
                                </p>
                            </div>
                        </div>
                        <div
                            id="w-node-_7e6b0911-de7c-22cd-1545-38dcd90b900a-71f4f6fc"
                            className="team-card"
                        >
                            <img
                                src="./About_UK_files/6688027c45d2260c56d0fea6_kyrylo-yermakov.webp"
                                loading="lazy"
                                sizes="(max-width: 479px) 90vw, (max-width: 991px) 100vw, (max-width: 1439px) 20vw, 19vw"
                                srcSet="https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/6688027c45d2260c56d0fea6_kyrylo-yermakov-p-500.webp 500w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/6688027c45d2260c56d0fea6_kyrylo-yermakov.webp 512w"
                                alt=""
                                className="team-photo s"
                            />
                            <div className="team-card-text">
                                <div className="team-coordinator-name-title-div">
                                    <h3 className="h4 name">
                                        Кирило
                                        <br />
                                        Єрмаков
                                    </h3>
                                    <div className="text-title-1">Продакт дизайнер</div>
                                </div>
                                <p className="text-paragraph-3">
                                    Віце-президент Української ассоціації фахівців IT, продакт
                                    дизайнер в Jetbeep, засновник Codebliss.
                                </p>
                            </div>
                        </div>
                        <div
                            id="w-node-a7e3b5a0-f2da-7857-a10a-6c3f154ddd95-71f4f6fc"
                            className="team-card"
                        >
                            <img
                                src="./About_UK_files/666fac82426910a7be36be87_img-0094.webp"
                                loading="lazy"
                                alt=""
                                className="team-photo s"
                            />
                            <div className="team-card-text">
                                <div className="team-coordinator-name-title-div">
                                    <h3 className="h4 name">
                                        Сергій
                                        <br />
                                        Макулашовкаві, PhD
                                    </h3>
                                    <div className="text-title-1">Координатор проєкту</div>
                                </div>
                                <p className="text-paragraph-3">
                                    Професор Департаменту Інформаційних систем та технологій,
                                    Факультет Інформаційних Технологій, Київський національний
                                    університет імені Тараса Шевченка
                                </p>
                            </div>
                        </div>
                        <div
                            id="w-node-a1b0873f-0d2b-c182-3c03-9c76cbd5e249-71f4f6fc"
                            className="team-card"
                        >
                            <img
                                src="./About_UK_files/666fac82426910a7be36be87_img-0094.webp"
                                loading="lazy"
                                alt=""
                                className="team-photo s"
                            />
                            <div className="team-card-text">
                                <div className="team-coordinator-name-title-div">
                                    <h3 className="h4 name">
                                        Сергій
                                        <br />
                                        Бронін, PhD
                                    </h3>
                                    <div className="text-title-1">Координатор проєкту</div>
                                </div>
                                <p className="text-paragraph-3">
                                    Професор Департаменту Інформаційних систем та технологій,
                                    Факультет Інформаційних Технологій, Київський національний
                                    університет імені Тараса Шевченка
                                </p>
                            </div>
                        </div>
                        <div
                            id="w-node-ca6b06c2-ec02-842d-5ccb-715c260bdd6c-71f4f6fc"
                            className="team-card"
                        >
                            <img
                                src="./About_UK_files/666fac82426910a7be36be87_img-0094.webp"
                                loading="lazy"
                                alt=""
                                className="team-photo s"
                            />
                            <div className="team-card-text">
                                <div className="team-coordinator-name-title-div">
                                    <h3 className="h4 name">
                                        Сергій
                                        <br />
                                        Бронін, PhD
                                    </h3>
                                    <div className="text-title-1">Координатор проєкту</div>
                                </div>
                                <p className="text-paragraph-3">
                                    Професор Департаменту Інформаційних систем та технологій,
                                    Факультет Інформаційних Технологій, Київський національний
                                    університет імені Тараса Шевченка
                                </p>
                            </div>
                        </div>
                        <div
                            id="w-node-_4f282aa9-c6a0-08fa-1c4b-d882b488cac0-71f4f6fc"
                            className="team-card"
                        >
                            <img
                                src="./About_UK_files/666fac82426910a7be36be87_img-0094.webp"
                                loading="lazy"
                                alt=""
                                className="team-photo s"
                            />
                            <div className="team-card-text">
                                <div className="team-coordinator-name-title-div">
                                    <h3 className="h4 name">
                                        Сергій
                                        <br />
                                        Бронін, PhD
                                    </h3>
                                    <div className="text-title-1">Координатор проєкту</div>
                                </div>
                                <p className="text-paragraph-3">
                                    Професор Департаменту Інформаційних систем та технологій,
                                    Факультет Інформаційних Технологій, Київський національний
                                    університет імені Тараса Шевченка
                                </p>
                            </div>
                        </div>
                        <div
                            id="w-node-d5782e90-4ba7-0208-e2e2-17ecd15a8d0b-71f4f6fc"
                            className="team-card"
                        >
                            <img
                                src="./About_UK_files/666fac82426910a7be36be87_img-0094.webp"
                                loading="lazy"
                                alt=""
                                className="team-photo s"
                            />
                            <div className="team-card-text">
                                <div className="team-coordinator-name-title-div">
                                    <h3 className="h4 name">
                                        Сергій
                                        <br />
                                        Бронін, PhD
                                    </h3>
                                    <div className="text-title-1">Координатор проєкту</div>
                                </div>
                                <p className="text-paragraph-3">
                                    Професор Департаменту Інформаційних систем та технологій,
                                    Факультет Інформаційних Технологій, Київський національний
                                    університет імені Тараса Шевченка
                                </p>
                            </div>
                        </div>
                        <div
                            id="w-node-_93d39cbb-3ebe-a500-5bd5-9a2ab6612836-71f4f6fc"
                            className="team-card"
                        >
                            <img
                                src="./About_UK_files/666fac82426910a7be36be87_img-0094.webp"
                                loading="lazy"
                                alt=""
                                className="team-photo s"
                            />
                            <div className="team-card-text">
                                <div className="team-coordinator-name-title-div">
                                    <h3 className="h4 name">
                                        Сергій
                                        <br />
                                        Бронін, PhD
                                    </h3>
                                    <div className="text-title-1">Координатор проєкту</div>
                                </div>
                                <p className="text-paragraph-3">
                                    Професор Департаменту Інформаційних систем та технологій,
                                    Факультет Інформаційних Технологій, Київський національний
                                    університет імені Тараса Шевченка
                                </p>
                            </div>
                        </div>
                        <div
                            id="w-node-adb422ba-841c-6ae4-f9d4-db295204f8b1-71f4f6fc"
                            className="team-card"
                        >
                            <img
                                src="./About_UK_files/666fac82426910a7be36be87_img-0094.webp"
                                loading="lazy"
                                alt=""
                                className="team-photo s"
                            />
                            <div className="team-card-text">
                                <div className="team-coordinator-name-title-div">
                                    <h3 className="h4 name">
                                        Сергій
                                        <br />
                                        Бронін, PhD
                                    </h3>
                                    <div className="text-title-1">Координатор проєкту</div>
                                </div>
                                <p className="text-paragraph-3">
                                    Професор Департаменту Інформаційних систем та технологій,
                                    Факультет Інформаційних Технологій, Київський національний
                                    університет імені Тараса Шевченка
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="button-large team">
                        <div className="button-1-text">Більше учасників</div>
                    </div>
                </div>
                <div className="w-layout-blockcontainer about-container about-page w-container">
                    <div className="in-container-wrapper">
                        <div className="section-title">
                            <div className="text-title-1 bp2">06</div>
                            <div className="frame-107">
                                <img
                                    src="./About_UK_files/6650009b1791de600fc19b44_Vectors-Wrapper.svg"
                                    loading="lazy"
                                    width={48}
                                    height="1.0000041723251343"
                                    alt=""
                                    className="vectors-wrapper"
                                />
                                <div className="text-title-1 bp2">Партнери</div>
                            </div>
                        </div>
                        <div className="in-container-wrapper">
                            <h2 className="h2 section-heading">Партнери проєкту:</h2>
                        </div>
                    </div>
                </div>
                <div className="grid-holder partners">
                    <div className="w-layout-grid grid-partners">
                        <div
                            id="w-node-_319d00e2-7b2c-6c3c-7bb3-9876b553d7ca-71f4f6fc"
                            className="partner-card"
                        >
                            <img
                                src="./About_UK_files/66520d954ab87944d1f0c4ce_KNU logo eng.webp"
                                loading="lazy"
                                alt=""
                                className="partner-1"
                            />
                        </div>
                        <div
                            id="w-node-_2f24223b-61d4-921b-db4e-83a87053339c-71f4f6fc"
                            className="partner-card"
                        >
                            <img
                                src="./About_UK_files/6671abeadf28dde7c135a603_НАЦІОНАЛЬНИЙ УНІВЕРСИТЕТ КИЄВО-МОГИЛЯНСЬКА АКАДЕМІЯ, Україна.svg"
                                loading="lazy"
                                alt=""
                                className="partner-2"
                            />
                        </div>
                        <div
                            id="w-node-_6e340dfb-5fb2-6c00-52aa-5e9f90adddd3-71f4f6fc"
                            className="partner-card"
                        >
                            <img
                                src="./About_UK_files/6671ab97f50e56bd5c657c8d_СУМСЬКИЙ ДЕРЖАВНИЙ УНІВЕРСИТЕТ.svg"
                                loading="lazy"
                                alt=""
                                className="partner-4"
                            />
                        </div>
                        <div
                            id="w-node-_51153657-4fd0-07b8-7aaa-9422e5841731-71f4f6fc"
                            className="partner-card"
                        >
                            <img
                                src="./About_UK_files/6652167877095fd0f97ceaf8_SKKNUofE.webp"
                                loading="lazy"
                                alt=""
                                className="partner-1"
                            />
                        </div>
                        <div
                            id="w-node-_00ca9e0b-ffd1-d858-3cd1-d13c23a9c1ac-71f4f6fc"
                            className="partner-card"
                        >
                            <img
                                src="./About_UK_files/6652167877095fd0f97ceb26_chnu-logo.webp"
                                loading="lazy"
                                sizes="(max-width: 479px) 21vw, (max-width: 767px) 12vw, (max-width: 1279px) 10vw, (max-width: 1919px) 7vw, 5vw"
                                srcSet="https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/6652167877095fd0f97ceb26_chnu-logo-p-500.webp 500w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/6652167877095fd0f97ceb26_chnu-logo.webp 545w"
                                alt=""
                                className="partner-1"
                            />
                        </div>
                        <div
                            id="w-node-_344f18fa-4bc6-86cd-566c-8942d7a868f1-71f4f6fc"
                            className="partner-card upper-row"
                        >
                            <img
                                src="./About_UK_files/66521679dc7af0222c78c790_uku_logo_seal_engl.webp"
                                loading="lazy"
                                sizes="(max-width: 479px) 21vw, (max-width: 767px) 12vw, (max-width: 1279px) 10vw, (max-width: 1919px) 7vw, 5vw"
                                srcSet="https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/66521679dc7af0222c78c790_uku_logo_seal_engl-p-500.png 500w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/66521679dc7af0222c78c790_uku_logo_seal_engl.webp 918w"
                                alt=""
                                className="partner-1"
                            />
                        </div>
                        <div
                            id="w-node-_729a2fe7-a889-fe45-3ad0-5700a920f0e1-71f4f6fc"
                            className="partner-card upper-row"
                        >
                            <img
                                src="./About_UK_files/6652167896b6dbf839ee0066_en_b_c.webp"
                                loading="lazy"
                                sizes="(max-width: 479px) 21vw, (max-width: 767px) 12vw, (max-width: 1279px) 10vw, (max-width: 1919px) 7vw, 5vw"
                                srcSet="https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/6652167896b6dbf839ee0066_en_b_c-p-500.webp 500w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/6652167896b6dbf839ee0066_en_b_c-p-800.webp 800w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/6652167896b6dbf839ee0066_en_b_c.webp 1198w"
                                alt=""
                                className="partner-1"
                            />
                        </div>
                        <div
                            id="w-node-_4bb71ac5-8bcf-1ff2-6baa-1fd508136ad9-71f4f6fc"
                            className="partner-card upper-row"
                        >
                            <img
                                src="./About_UK_files/66521679dc7af0222c78c7f6_KSU color.webp"
                                loading="lazy"
                                sizes="(max-width: 479px) 21vw, (max-width: 767px) 12vw, (max-width: 1279px) 10vw, (max-width: 1919px) 7vw, 5vw"
                                srcSet="https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/66521679dc7af0222c78c7f6_KSU%20color-p-500.webp 500w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/66521679dc7af0222c78c7f6_KSU%20color-p-800.webp 800w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/66521679dc7af0222c78c7f6_KSU%20color-p-1080.webp 1080w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/66521679dc7af0222c78c7f6_KSU%20color-p-1600.webp 1600w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/66521679dc7af0222c78c7f6_KSU%20color-p-2000.webp 2000w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/66521679dc7af0222c78c7f6_KSU%20color.webp 2085w"
                                alt=""
                                className="partner-1"
                            />
                        </div>
                        <div
                            id="w-node-_538f0e39-0201-9503-5e63-80c7dfbe7bcc-71f4f6fc"
                            className="partner-card upper-row"
                        >
                            <img
                                src="./About_UK_files/665226de6785e36f90fd1fc7_mdu-logo-english-hor-02.webp"
                                loading="lazy"
                                sizes="(max-width: 479px) 30vw, (max-width: 767px) 16vw, (max-width: 1279px) 12vw, (max-width: 1439px) 10vw, (max-width: 1919px) 9vw, 7vw"
                                srcSet="https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/665226de6785e36f90fd1fc7_mdu-logo-english-hor-02-p-500.png 500w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/665226de6785e36f90fd1fc7_mdu-logo-english-hor-02-p-800.png 800w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/665226de6785e36f90fd1fc7_mdu-logo-english-hor-02-p-1080.png 1080w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/665226de6785e36f90fd1fc7_mdu-logo-english-hor-02-p-1600.png 1600w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/665226de6785e36f90fd1fc7_mdu-logo-english-hor-02-p-2000.png 2000w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/665226de6785e36f90fd1fc7_mdu-logo-english-hor-02.webp 3334w"
                                alt=""
                                className="partner-3"
                            />
                        </div>
                        <div
                            id="w-node-c349df14-ddda-0b72-5e03-7c520d8a0ddf-71f4f6fc"
                            className="partner-card upper-row"
                        >
                            <img
                                src="./About_UK_files/6652279784226f06fb5e0e7c_lviv_uni.webp"
                                loading="lazy"
                                sizes="(max-width: 479px) 32vw, (max-width: 767px) 18vw, (max-width: 1279px) 14vw, (max-width: 1439px) 12vw, (max-width: 1919px) 11vw, 8vw"
                                srcSet="https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/6652279784226f06fb5e0e7c_lviv_uni-p-500.png 500w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/6652279784226f06fb5e0e7c_lviv_uni.webp 1000w"
                                alt=""
                                className="partner-4"
                            />
                        </div>
                        <div
                            id="w-node-_32231c97-ec90-fa3f-968a-c45013a4315d-71f4f6fc"
                            className="partner-card upper-row"
                        >
                            <img
                                src="./About_UK_files/665225b9eb9b2ec6d477b227_mon_logo_on_white_eng 1.webp"
                                loading="lazy"
                                alt=""
                                className="partner-4"
                            />
                        </div>
                        <div
                            id="w-node-e35c9051-4c17-a8a7-d873-bb4d38aa663d-71f4f6fc"
                            className="partner-card upper-row"
                        >
                            <img
                                src="./About_UK_files/66703f7a74c2bf04a9843482_Ministry_of_Digital_Transformation_of_Ukraine.svg"
                                loading="lazy"
                                alt=""
                                className="partner-4"
                            />
                        </div>
                        <div
                            id="w-node-_824398d3-bc3e-8fd8-f0d0-b3271619a6bb-71f4f6fc"
                            className="partner-card upper-row"
                        >
                            <img
                                src="./About_UK_files/66523959861b36021f3662d2_uaitp_logo.svg"
                                loading="lazy"
                                alt=""
                                className="partner-4"
                            />
                        </div>
                        <div
                            id="w-node-_6d57503e-6ffa-dc57-e286-6899b497f1b0-71f4f6fc"
                            className="partner-card upper-row"
                        >
                            <img
                                src="./About_UK_files/66523d89698d2f7e5f4bdf3e_NAQA_logo_circle.webp"
                                loading="lazy"
                                alt=""
                                className="partner-1"
                            />
                        </div>
                        <div
                            id="w-node-c9d531aa-7c0e-d19a-06fe-de66390b50af-71f4f6fc"
                            className="partner-card upper-row"
                        >
                            <img
                                src="./About_UK_files/66523d236785e36f900be381_FAU_blue.webp"
                                loading="lazy"
                                alt=""
                                className="partner-3"
                            />
                        </div>
                        <div
                            id="w-node-_63e67a58-196d-5f00-7529-dbe81619a848-71f4f6fc"
                            className="partner-card upper-row"
                        >
                            <img
                                src="./About_UK_files/66523d2dde1076bbfa6fabba_muni-lg-rgb.webp"
                                loading="lazy"
                                sizes="(max-width: 479px) 30vw, (max-width: 767px) 16vw, (max-width: 1279px) 12vw, (max-width: 1439px) 10vw, (max-width: 1919px) 9vw, 7vw"
                                srcSet="https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/66523d2dde1076bbfa6fabba_muni-lg-rgb-p-500.webp 500w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/66523d2dde1076bbfa6fabba_muni-lg-rgb.webp 1070w"
                                alt=""
                                className="partner-3"
                            />
                        </div>
                        <div
                            id="w-node-a03c95da-e040-e1a5-1986-23bce9f4da20-71f4f6fc"
                            className="partner-card upper-row"
                        >
                            <img
                                src="./About_UK_files/6652408246dd317bdadd349e_Universitaet zu Koeln Logo ENG.webp"
                                loading="lazy"
                                alt=""
                                className="partner-3"
                            />
                        </div>
                        <div
                            id="w-node-_142da7bd-d22e-239b-a64d-21ccf3ab7e00-71f4f6fc"
                            className="partner-card upper-row"
                        >
                            <img
                                src="./About_UK_files/66523dfb8cf47ce5f8cdf53c_Logo_UAM_kolor_negatyw.svg"
                                loading="lazy"
                                alt=""
                                className="partner-2"
                            />
                        </div>
                        <div
                            id="w-node-_3a8fca52-41ee-4f2f-b863-0cb8c8afab60-71f4f6fc"
                            className="partner-card upper-row"
                        >
                            <img
                                src="./About_UK_files/66719f644efcead687b34099_УНІВЕРСИТЕТ Луї Пастера, Франція.svg"
                                loading="lazy"
                                alt=""
                                className="partner-4"
                            />
                        </div>
                        <div
                            id="w-node-_7e8ace8b-8e45-5b0f-ab07-0081b5909427-71f4f6fc"
                            className="partner-card upper-row"
                        >
                            <img
                                src="./About_UK_files/6652420b526c8a641fc5a621_luh_logo_cmyk.webp"
                                loading="lazy"
                                sizes="(max-width: 479px) 32vw, (max-width: 767px) 18vw, (max-width: 1279px) 14vw, (max-width: 1439px) 12vw, (max-width: 1919px) 11vw, 8vw"
                                srcSet="https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/6652420b526c8a641fc5a621_luh_logo_cmyk-p-500.webp 500w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/6652420b526c8a641fc5a621_luh_logo_cmyk.webp 700w"
                                alt=""
                                className="partner-4"
                            />
                        </div>
                        <div
                            id="w-node-_89e97126-a294-ef8b-c667-e8d1fd708bce-71f4f6fc"
                            className="partner-card upper-row"
                        >
                            <img
                                src="./About_UK_files/6671a1467553e9fa5bf8c71d_УНІВЕРСИТЕТ АЛІКАНТЕ, Іспанія.svg"
                                loading="lazy"
                                alt=""
                                className="partner-4"
                            />
                        </div>
                        <div
                            id="w-node-_7c6bd6e0-0564-fbf4-b2a4-b24c53c9b18f-71f4f6fc"
                            className="partner-card upper-row"
                        >
                            <img
                                src="./About_UK_files/665246162ae3950640e54c8b_logo-ecti.webp"
                                loading="lazy"
                                sizes="(max-width: 479px) 32vw, (max-width: 767px) 18vw, (max-width: 1279px) 14vw, (max-width: 1439px) 12vw, (max-width: 1919px) 11vw, 8vw"
                                srcSet="https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/665246162ae3950640e54c8b_logo-ecti-p-500.webp 500w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/665246162ae3950640e54c8b_logo-ecti.webp 695w"
                                alt=""
                                className="partner-4"
                            />
                        </div>
                        <div
                            id="w-node-b42cb955-3a43-c5b0-e720-37afcf20c8d5-71f4f6fc"
                            className="partner-card upper-row"
                        >
                            <img
                                src="./About_UK_files/665246ad18444d8df9cd0463_лого - УАС.webp"
                                loading="lazy"
                                alt=""
                                className="partner-3"
                            />
                        </div>
                        <div className="partner-card upper-row">
                            <img
                                src="./About_UK_files/665247789c308b00dc84c9ae_PO-USEIT_Logo.webp"
                                loading="lazy"
                                sizes="(max-width: 479px) 32vw, (max-width: 767px) 18vw, (max-width: 1279px) 14vw, (max-width: 1439px) 12vw, (max-width: 1919px) 11vw, 8vw"
                                srcSet="https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/665247789c308b00dc84c9ae_PO-USEIT_Logo-p-500.webp 500w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/665247789c308b00dc84c9ae_PO-USEIT_Logo.webp 700w"
                                alt=""
                                className="partner-4"
                            />
                        </div>
                        <div className="partner-card upper-row">
                            <img
                                src="./About_UK_files/6671a170593be8b7e57bcd98_БІБЛІОТЕКА ТЕХНІЧНОЇ ІНФОРМАЦІЇ (БТІ), Німеччина.svg"
                                loading="lazy"
                                alt=""
                                className="partner-4"
                            />
                        </div>
                        <div
                            id="w-node-_7bd60732-1d0d-24e3-7aa2-041f675fe21c-71f4f6fc"
                            className="partner-card upper-row"
                        >
                            <img
                                src="./About_UK_files/6679dff8255ef2d92731ce7a_European_University_Association_logo.svg"
                                loading="lazy"
                                alt=""
                                className="partner-4"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid-hor-line" />
                <div className="w-layout-blockcontainer about-container about-page w-container">
                    <div className="in-container-wrapper">
                        <div className="section-title">
                            <div className="text-title-1 bp2">07</div>
                            <div className="frame-107">
                                <img
                                    src="./About_UK_files/6650009b1791de600fc19b44_Vectors-Wrapper.svg"
                                    loading="lazy"
                                    width={48}
                                    height="1.0000041723251343"
                                    alt=""
                                    className="vectors-wrapper"
                                />
                                <div className="text-title-1 bp2">Таймлайн</div>
                            </div>
                        </div>
                        <div className="in-container-wrapper">
                            <h2 className="h2 section-heading">Таймлайн проєкту:</h2>
                        </div>
                    </div>
                    <div className="timeline-container-mobile">
                        <div className="timeline-vert-mob" />
                        <div className="timeline-m-right">
                            <div className="timeline-item-date">
                                <img
                                    src="./About_UK_files/667053db715039e091c6b2bd_Vectors-Wrapper.svg"
                                    loading="lazy"
                                    alt=""
                                    className="timeline-dot"
                                />
                                <div className="timeline-item-m">
                                    <div className="timeline-date-wrraper">
                                        <div className="text-4">31/12/24</div>
                                    </div>
                                    <div className="text-paragraph-3 timeline">
                                        Obtain experience and best practices from Digiuni EU Partners
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-item-date">
                                <img
                                    src="./About_UK_files/667053db715039e091c6b2bd_Vectors-Wrapper.svg"
                                    loading="lazy"
                                    alt=""
                                    className="timeline-dot"
                                />
                                <div className="timeline-item-m">
                                    <div className="timeline-date-wrraper">
                                        <div className="text-4">30/04/25</div>
                                    </div>
                                    <div className="text-paragraph-3 timeline">
                                        Create training curriculum for teachers and trainers
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-item-date">
                                <img
                                    src="./About_UK_files/667053db715039e091c6b2bd_Vectors-Wrapper.svg"
                                    loading="lazy"
                                    alt=""
                                    className="timeline-dot"
                                />
                                <div className="timeline-item-m">
                                    <div className="timeline-date-wrraper">
                                        <div className="text-4">31/05/25</div>
                                    </div>
                                    <div className="text-paragraph-3 timeline">
                                        Create 10 DigiCentres in each UA partner university
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-item-date">
                                <img
                                    src="./About_UK_files/667053db715039e091c6b2bd_Vectors-Wrapper.svg"
                                    loading="lazy"
                                    alt=""
                                    className="timeline-dot"
                                />
                                <div className="timeline-item-m">
                                    <div className="timeline-date-wrraper">
                                        <div className="text-4">31/07/25</div>
                                    </div>
                                    <div className="timeline-complex-wrapper">
                                        <div className="text-paragraph-3 timeline">
                                            Launch DigiPlatform
                                        </div>
                                        <div className="time-hor-sub-line" />
                                        <div className="text-paragraph-3 timeline">
                                            Create UA Digital &nbsp;educational ecosystem
                                        </div>
                                        <div className="time-hor-sub-line" />
                                        <div className="text-paragraph-3 timeline">
                                            Obtain experience and best practices from Digiuni EU Partners
                                        </div>
                                        <div className="time-hor-sub-line" />
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-item-date">
                                <img
                                    src="./About_UK_files/667053db715039e091c6b2bd_Vectors-Wrapper.svg"
                                    loading="lazy"
                                    alt=""
                                    className="timeline-dot"
                                />
                                <div className="timeline-item-m">
                                    <div className="timeline-date-wrraper">
                                        <div className="text-4">30/11/25</div>
                                    </div>
                                    <div className="text-paragraph-3 timeline">
                                        UA university staff trained and ready to use DigiUni platform
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-item-date">
                                <img
                                    src="./About_UK_files/667053db715039e091c6b2bd_Vectors-Wrapper.svg"
                                    loading="lazy"
                                    alt=""
                                    className="timeline-dot"
                                />
                                <div className="timeline-item-m">
                                    <div className="timeline-date-wrraper">
                                        <div className="text-4">31/01/26</div>
                                    </div>
                                    <div className="timeline-complex-wrapper">
                                        <div className="text-paragraph-3 timeline">
                                            Developed rules for Quality assurance of digital content
                                        </div>
                                        <div className="time-hor-sub-line" />
                                        <div className="text-paragraph-3 timeline">
                                            Existing digital content placed on DigiPlatform
                                        </div>
                                        <div className="time-hor-sub-line" />
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-item-date">
                                <img
                                    src="./About_UK_files/667053db715039e091c6b2bd_Vectors-Wrapper.svg"
                                    loading="lazy"
                                    alt=""
                                    className="timeline-dot"
                                />
                                <div className="timeline-item-m">
                                    <div className="timeline-date-wrraper">
                                        <div className="text-4">31/05/26</div>
                                    </div>
                                    <div className="text-paragraph-3 timeline">
                                        DigiPlatform is equipped with virtual laboratories and other
                                        features
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-item-date">
                                <img
                                    src="./About_UK_files/667053db715039e091c6b2bd_Vectors-Wrapper.svg"
                                    loading="lazy"
                                    alt=""
                                    className="timeline-dot"
                                />
                                <div className="timeline-item-m">
                                    <div className="timeline-date-wrraper">
                                        <div className="text-4">31/03/27</div>
                                    </div>
                                    <div className="text-paragraph-3 timeline">
                                        New exclusive digital content is created
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-item-date">
                                <img
                                    src="./About_UK_files/667053db715039e091c6b2bd_Vectors-Wrapper.svg"
                                    loading="lazy"
                                    alt=""
                                    className="timeline-dot"
                                />
                                <div className="timeline-item-m">
                                    <div className="timeline-date-wrraper">
                                        <div className="text-4">31/10/27</div>
                                    </div>
                                    <div className="text-paragraph-3 timeline">
                                        DigiUni pilot implemented and target groups trained
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-container">
                        <div className="w-layout-grid timeline-grid--upper">
                            <div className="time-upper-unit">
                                <div className="time-upper-sub-unit">
                                    <div className="text-paragraph-3 timeline">
                                        Obtain experience and best practices from Digiuni EU Partners
                                    </div>
                                    <div className="timeline-time">
                                        <div className="text-3">31/12/24</div>
                                    </div>
                                </div>
                                <div className="timeline-vert-wrapper">
                                    <wrapper className="timeline-vert-line" />
                                    <img
                                        src="./About_UK_files/667051eafa94e6376826e82a_Vectors-Wrapper.svg"
                                        loading="lazy"
                                        width={18}
                                        height={18}
                                        alt=""
                                        className="timeline-dot"
                                    />
                                </div>
                            </div>
                            <div className="time-upper-unit">
                                <div className="time-upper-sub-unit">
                                    <div className="text-paragraph-3 timeline">
                                        Create 10 DigiCentres in each UA partner university
                                    </div>
                                    <div className="timeline-time">
                                        <div className="text-3">31/05/25</div>
                                    </div>
                                </div>
                                <div className="timeline-vert-wrapper">
                                    <wrapper className="timeline-vert-line" />
                                    <img
                                        src="./About_UK_files/667051eafa94e6376826e82a_Vectors-Wrapper.svg"
                                        loading="lazy"
                                        width={18}
                                        height={18}
                                        alt=""
                                        className="timeline-dot"
                                    />
                                </div>
                            </div>
                            <div className="time-upper-unit">
                                <div className="time-upper-sub-unit">
                                    <div className="text-paragraph-3 timeline">
                                        UA university staff trained and ready to use DigiUni platform
                                    </div>
                                    <div className="timeline-time">
                                        <div className="text-3">30/11/25</div>
                                    </div>
                                </div>
                                <div className="timeline-vert-wrapper">
                                    <wrapper className="timeline-vert-line" />
                                    <img
                                        src="./About_UK_files/667051eafa94e6376826e82a_Vectors-Wrapper.svg"
                                        loading="lazy"
                                        width={18}
                                        height={18}
                                        alt=""
                                        className="timeline-dot"
                                    />
                                </div>
                            </div>
                            <div className="time-upper-unit">
                                <div className="time-upper-sub-unit">
                                    <div className="text-paragraph-3 timeline">
                                        DigiPlatform is equipped with virtual laboratories and other
                                        features
                                    </div>
                                    <div className="timeline-time">
                                        <div className="text-3">31/05/26</div>
                                    </div>
                                </div>
                                <div className="timeline-vert-wrapper">
                                    <wrapper className="timeline-vert-line" />
                                    <img
                                        src="./About_UK_files/667051eafa94e6376826e82a_Vectors-Wrapper.svg"
                                        loading="lazy"
                                        width={18}
                                        height={18}
                                        alt=""
                                        className="timeline-dot"
                                    />
                                </div>
                            </div>
                            <div className="time-upper-unit">
                                <div className="time-upper-sub-unit">
                                    <div className="text-paragraph-3 timeline">
                                        DigiUni pilot implemented and target groups trained
                                    </div>
                                    <div className="timeline-time">
                                        <div className="text-3">31/10/27</div>
                                    </div>
                                </div>
                                <div className="timeline-vert-wrapper">
                                    <wrapper className="timeline-vert-line" />
                                    <img
                                        src="./About_UK_files/667051eafa94e6376826e82a_Vectors-Wrapper.svg"
                                        loading="lazy"
                                        width={18}
                                        height={18}
                                        alt=""
                                        className="timeline-dot"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="timeline-hor-line" />
                        <div className="w-layout-grid timeline-grid--bottom">
                            <div className="timeline-bottom-unit">
                                <div className="timeline-vert-line-2">
                                    <img
                                        src="./About_UK_files/667053db715039e091c6b2bd_Vectors-Wrapper.svg"
                                        loading="lazy"
                                        width={18}
                                        height={18}
                                        alt=""
                                        className="timeline-dot"
                                    />
                                    <wrapper className="timeline-vert-line" />
                                </div>
                                <div className="time-upper-unit-2">
                                    <div className="timeline-time">
                                        <div className="text-4">30/04/25</div>
                                    </div>
                                    <div className="text-paragraph-3 timeline">
                                        Create training curriculum for teachers and trainers
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-bottom-unit">
                                <div className="timeline-vert-line-2">
                                    <img
                                        src="./About_UK_files/667053db715039e091c6b2bd_Vectors-Wrapper.svg"
                                        loading="lazy"
                                        width={18}
                                        height={18}
                                        alt=""
                                        className="timeline-dot"
                                    />
                                    <wrapper className="timeline-vert-line" />
                                </div>
                                <div className="frame-214">
                                    <div className="time-upper-unit-2">
                                        <div className="timeline-time">
                                            <div className="text-4">31/07/25</div>
                                        </div>
                                        <div className="text-paragraph-3 timeline">
                                            Launch DigiPlatform
                                        </div>
                                    </div>
                                    <div className="time-hor-sub-line" />
                                    <div className="text-paragraph-3 timeline">
                                        Create UA Digital educational ecosystem
                                    </div>
                                    <div className="time-hor-sub-line" />
                                    <div className="text-paragraph-3 timeline">
                                        Obtain experience and best practices from Digiuni EU Partners
                                    </div>
                                    <div className="time-hor-sub-line" />
                                </div>
                            </div>
                            <div className="timeline-bottom-unit">
                                <div className="timeline-vert-line-2">
                                    <img
                                        src="./About_UK_files/667053db715039e091c6b2bd_Vectors-Wrapper.svg"
                                        loading="lazy"
                                        width={18}
                                        height={18}
                                        alt=""
                                        className="timeline-dot"
                                    />
                                    <wrapper className="timeline-vert-line" />
                                </div>
                                <div className="frame-214">
                                    <div className="timeline-time">
                                        <div className="text-4">31/01/26</div>
                                    </div>
                                    <div className="text-5">
                                        Developed rules for Quality assurance of digital content
                                    </div>
                                    <img
                                        src="./About_UK_files/667053dcacfd498e4ab307f2_Vectors-Wrapper.svg"
                                        loading="lazy"
                                        width={200}
                                        height={100}
                                        alt=""
                                        className="time-hor-sub-line"
                                    />
                                    <div className="text-5">
                                        Existing digital content placed on DigiPlatform
                                    </div>
                                    <img
                                        src="./About_UK_files/667053dcacfd498e4ab307f2_Vectors-Wrapper.svg"
                                        loading="lazy"
                                        width={200}
                                        height={100}
                                        alt=""
                                        className="time-hor-sub-line"
                                    />
                                </div>
                            </div>
                            <div className="timeline-bottom-unit">
                                <div className="timeline-vert-line-2">
                                    <img
                                        src="./About_UK_files/667053db715039e091c6b2bd_Vectors-Wrapper.svg"
                                        loading="lazy"
                                        width={18}
                                        height={18}
                                        alt=""
                                        className="timeline-dot"
                                    />
                                    <wrapper className="timeline-vert-line" />
                                </div>
                                <div className="time-upper-unit-2">
                                    <div className="timeline-time">
                                        <div className="text-4">31/03/27</div>
                                    </div>
                                    <div className="text-5">
                                        New exclusive digital content is created
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div-block-3">
                    <div className="button-large timeline">
                        <div className="button-1-text">Детальний таймлайн</div>
                    </div>
                </div>
                <div className="pixel-pattern--wrapper">
                    <img
                        src="./About_UK_files/665a03060c508b5bebad4233_pixel-pattern-3.webp"
                        loading="lazy"
                        sizes="(max-width: 1919px) 100vw, 75vw"
                        srcSet="https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/665a03060c508b5bebad4233_pixel-pattern-3-p-800.webp 800w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/665a03060c508b5bebad4233_pixel-pattern-3-p-1080.webp 1080w, https://cdn.prod.website-files.com/664e52ce5f3e33f298744002/665a03060c508b5bebad4233_pixel-pattern-3.webp 1440w"
                        alt=""
                        className="lower-pixel"
                    />
                    <img
                        src="./About_UK_files/6660b1b0164a248d1ba899e0_pixel-pattern-mob-4.jpg"
                        loading="lazy"
                        alt=""
                        className="lower-pixel-4"
                    />
                </div>
            </div>
            <section className="footer">
                <div className="w-layout-blockcontainer footer-container w-container">
                    <div className="footer-content--wrapper">
                        <div className="f-c-wrapper--1">
                            <div className="footer-logo--holder">
                                <a
                                    href="https://digiuni-website.webflow.io/"
                                    className="w-inline-block"
                                >
                                    <img
                                        src="./About_UK_files/6654d212b6080c0421a72640_Vectors-Wrapper.svg"
                                        loading="lazy"
                                        alt=""
                                        className="footer-logo"
                                    />
                                </a>
                                <div className="footer-text-1">
                                    Цифровий університет -<br />
                                    Відкрита українська ініціатива
                                </div>
                            </div>
                        </div>
                        <div className="f-c-wrapper--1">
                            <a
                                href="https://digiuni-website.webflow.io/about"
                                aria-current="page"
                                className="link w--current"
                            >
                                Головна
                            </a>
                            <a
                                href="https://digiuni-website.webflow.io/about"
                                aria-current="page"
                                className="link w--current"
                            >
                                Про нас
                            </a>
                            <a
                                href="https://digiuni-website.webflow.io/about#"
                                className="link _0"
                            >
                                Програми
                            </a>
                            <a href="https://digiuni-website.webflow.io/news" className="link">
                                Новини
                            </a>
                            <a
                                href="https://digiuni-website.webflow.io/contacts"
                                className="link"
                            >
                                Контакти
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footern-pattern-holder">
                    <img
                        src="./About_UK_files/6660b777ee5d39235576c764_digiuni-footer-img-2.svg"
                        loading="lazy"
                        alt=""
                        className="image-8"
                    />
                </div>
                <div className="footer-divider" />
                <div className="lower-footer--wrapper">
                    <div className="footer-text">
                        ©2024 Funded by the European Union. Views and opinions expressed are
                        however those of the author(s) only and do not necessarily reflect those
                        of the European Union or [name of the granting authority]. Neither the
                        European Union nor the granting authority can be held responsible for
                        them.
                    </div>
                </div>
            </section>
            <a
                className="w-webflow-badge"
                href="https://webflow.com/?utm_campaign=brandjs"
            >
                <img
                    src="./About_UK_files/webflow-badge-icon-d2.89e12c322e.svg"
                    alt=""
                    style={{ marginRight: 4, width: 26 }}
                />
                <img
                    src="./About_UK_files/webflow-badge-text-d2.c82cec3b78.svg"
                    alt="Made in Webflow"
                />
            </a>
        </>

    )
}