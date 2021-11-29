/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import './App.css';

const dateTimePretty = (Component) => {
  return (props) => {
    const fromNow = moment(props.date).locale('ru').fromNow();
    return <Component {...props} {...{ date: fromNow }} />;
  };
};

const UpgDate = dateTimePretty(DateTime);

function DateTime(props) {
  return <p className='date'>{props.date}</p>;
}

function Video(props) {
  console.log(props);
  return (
    <div className='video'>
      <iframe
        src={props.url}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
      ></iframe>
      {/* <DateTime date={props.date} /> */}
      <UpgDate date={props.date} />
    </div>
  );
}

function VideoList(props) {
  return props.list.map((item, i) => (
    <Video key={i} url={item.url} date={item.date} />
  ));
}

export default function App() {
  const [list, setList] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-11-23 06:24:00',
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-11-23 01:10:00',
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-11-20 23:16:00',
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-03 12:10:00',
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-01 16:17:00',
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-12-02 05:24:00',
    },
  ]);

  return <VideoList list={list} />;
}
