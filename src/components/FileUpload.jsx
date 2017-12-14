'use strict';

import React from 'react';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';

export default class FileUpload extends React.Component {
    handleFinishedUpload(info) {
        // TODO use info.publicUrl as the src attribute on an image
        console.log(info.publicUrl);
    }

    render() {
        const uploadOptions = { server: 'http://localhost:8080' };

        return (
            <DropzoneS3Uploader
                onFinish={this.handleFinishedUpload}
                s3Url={'https://look-look-generator.s3.amazonaws.com'}
                maxSize={1024 * 1024 * 5}
                upload={uploadOptions}
            />
        );
    }
}