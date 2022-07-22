import React from 'react';
import './SideBar.css';
import AppsIcon from '@mui/icons-material/Apps';
import ArticleIcon from '@mui/icons-material/Article';
import PostAddIcon from '@mui/icons-material/PostAdd';
import CommentIcon from '@mui/icons-material/Comment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom"; 

export default function SideBar() {
    return (
        <div className='sidebar'>
            <div className="sideBarWrapper">
                <div className="sideBarMenu">
                    <Link to="/" className="menuItemWrapper">
                        <AppsIcon />
                        <span className="menuItem">Blog Dashboard</span>
                    </Link>
                    <Link to="/post" className="menuItemWrapper">
                        <ArticleIcon />
                        <span className="menuItem">Blog Posts</span>
                    </Link>
                    <Link to="/addpost" className="menuItemWrapper">
                        <PostAddIcon />
                        <span className="menuItem">Add New Post</span>
                    </Link>
                    <Link to="/comments" className="menuItemWrapper">
                        <CommentIcon />
                        <span className="menuItem">Comments</span>
                    </Link>
                    <Link to="/profile" className="menuItemWrapper">
                        <AccountCircleIcon />
                        <span className="menuItem">User Profile</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
