import React from 'react';
import ReactDOM from 'react-dom';
import './Comment.css';

const Comment = () => {
  let users = [
    {
      name: 'Alex',
      time: 'Today at 5:00',
      comment: 'Great blog post!',
      avatar: 'https://cdn2.vectorstock.com/i/thumbs/20/76/man-avatar-profile-vector-21372076.jpg',
    },
    {
      name: 'Sam',
      time: 'Today at 7:51',
      comment: 'Informative. thanks.',
      avatar: 'https://cdn2.vectorstock.com/i/thumbs/20/76/man-avatar-profile-vector-21372076.jpg',
    },
    {
      name: 'Jane',
      time: 'Today at 9:01',
      comment: 'Looks great.',
      avatar: 'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png',
    },
  ];

  return(
    <div>
      <div className='title'>Comments</div>
      <div className='comment_container'>
        <div className='comment_box'>
          <img src={users[0].avatar} alt="Avatar" className='avatar'/>
          <div  className='text'>
            <span className='name'>{users[0].name}</span><span className='time'>{users[0].time}</span>
            <div className='comment'>{users[0].comment}</div>
          </div>
        </div>
        <div className='comment_box'>
          <img src={users[1].avatar} alt="Avatar" className='avatar'/>
          <div className='text'>
            <span className='name'>{users[1].name}</span><span className='time'>{users[1].time}</span>
            <div className='comment'>{users[1].comment}</div>
          </div>
        </div>
        <div className='comment_box'>
          <img src={users[2].avatar} alt="Avatar" className='avatar'/>
          <div className='text'>
            <span className='name'>{users[2].name}</span><span className='time'>{users[2].time}</span>
            <div className='comment'>{users[2].comment}</div>
          </div>
        </div>
      </div>
    </div>
      
  )

};

ReactDOM.render(<Comment />, document.querySelector('#root'));
