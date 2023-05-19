# README

# Facelook

![Facelook](https://user-images.githubusercontent.com/96739868/235540247-b59ad605-cc5e-4218-af0f-18dd0e587a36.PNG)

## Full Stack clone of Facebook, a social media site where users interact
Facelook is a dynamic and true single-page application utilizing React’s components and Redux’s state management, allowing for creation of more predictable state and reliable DOM rendering. It utilizes Amazon AWS3 to host images to improve content security, provide easy data management, reduce page load, and improve scalability. The front-end was created using React, CSS, and HTML. The back-end utilizes Ruby on Rails, taking advantage of SQL and Active Record to reduce API querying.

## Techologies Used
+ React/Redux
+ Javascript
+ Ruby on Rails
+ HTML
+ CSS
+ PostgreSQL
+ AWS

## Create Posts

The primary way that Facelook users interact is utilizing posts. Facelook allows for functionalities such as liking and replying to other users' posts!
```
  return(
            <>
                <div className='post-form-container'>
                    <h2>Create Post</h2>
                    <form className='create-post-form'>
                        <div className='post-body-container'>
                            <img className='post-form-photo' src={this.props.currentUser.profilePicture}/>
                            <textarea className='post-body' onChange={this.update('body')} value={this.state.body} placeholder="What's on your mind?"></textarea>
                        </div>
                        <div className='create-post-border-top'/>
                        {showPreview}
                        <div className='upload-photo-container'>
                            <div className='upload-photo-btn' onClick={this.clickFile('post-photo-btn')}>
                                <div className='photo-icon' onClick={this.clickFile('post-photo-btn')}></div>
                                <p>Photo</p>
                                <input className='post-photo-btn' type="file" onChange={this.handleFile}/>
                            </div>
                        </div>
                        <div className='create-post-border-bottom'/>
                        <div className='create-post-btn-container'>

                        {postButton}
                        </div>
                    </form>
                </div>
            </>
        );
```

## Demo

[facelook_demo.webm](https://user-images.githubusercontent.com/96739868/235543481-7fa74eca-aaa0-45f2-9b37-43485409f69e.webm)

## Check It Out!
[On Heroku](https://facelook-ayueh.herokuapp.com/#/)


