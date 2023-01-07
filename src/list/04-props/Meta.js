import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import sample from './assets/img/sample.png';

const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{props.title}</title>

                <meta name="description" content={props.description} />
                <meta name="keywords" content={props.keywords} />
                <meta name="author" content={props.author} />
                <meta name="subject" content={props.subject} />
                <meta name="copyright" content={props.copyright} />
                <meta name="content-language" content='ko' />
                <meta property="og:type" content="website"/>
                <meta property="og:description" content={props.description}/>
                <meta property="og:url" content={props.url}/>
                <meta property="og:image" content={props.image}/>
                <link rel="icon" href={props.icon} type='image/png' />
                <link rel="shortcut icon" href={props.shortcutIcon} type='image/png' />
                <link rel="apple-touch-icon" href={props.appleTouchIcon} type='image/png' />
            </Helmet>
        </HelmetProvider>
    )
}

Meta.defaultProps = {
    title: "React Example",
    description: 'React.js 예제 입니다.',
    author: '혜연',
    subject: 'React.js Frontend Programing',
    copyright: 'Dong H.Y',
    keywords: 'React',
    url: window.location.href,
    image: sample,
    icon: null,
    shortcutIcon: null,
    appleTouchIcon: null,
}

export default Meta;