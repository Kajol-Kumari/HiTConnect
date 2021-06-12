import React, { Component } from 'react';
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import "./create-blog.css";
import { Button2 } from "../../../template/button/button";
export default class CreateBlog extends Component {
    render() {
        return (
            <div className="editor">
                <div className="motive">
                    <h1 className="heading">New Blog</h1>
                    <div className="dash"></div>
                </div>
                <div className="editor-wrapper">
                <div className="header">
                    <input
                        type="text"
                        className="inputs"
                        placeholder="Blog Heading..."
                    ></input>
                </div>
                <div className="header">
                    <input
                        type="url"
                        className="inputs"
                        placeholder="Related Link..."
                    ></input>
                </div>
                <div>
                    <SunEditor
                        lang="en"
                        placeholder="Please put the content here..."
                        height="280px"
                        className="edit"
                    />
                    <div className="submit-btn">
                        <Button2
                            className="submit-btn-text"
                            label="Submit"
                            type="submit"
                        />
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
