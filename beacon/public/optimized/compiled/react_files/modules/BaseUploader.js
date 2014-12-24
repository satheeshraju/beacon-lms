(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};define(["jquery","jquery.ajaxJSON"],function(e){var r;return r=function(){function r(e,r){this.trackProgress=t(this.trackProgress,this),this.onUploadPosted=t(this.onUploadPosted,this),this.onPreflightComplete=t(this.onPreflightComplete,this),this.file=e.file,this.options=e,this.folder=r,this.progress=0,this._xhr=new XMLHttpRequest}return r.prototype.onProgress=function(){},r.prototype.createFormData=function(){var t,e;return t=this.uploadData.upload_params,e=new FormData,Object.keys(t).forEach(function(r){return e.append(r,t[r])}),e.append("file",this.file),e},r.prototype.createPreFlightParams=function(){var t;return t={name:this.options.name||this.file.name,size:this.file.size,content_type:this.file.type,on_duplicate:this.options.dup||"rename",parent_folder_id:this.folder.id,no_redirect:!0}},r.prototype.getPreflightUrl=function(){return"/api/v1/folders/"+this.folder.id+"/files"},r.prototype.onPreflightComplete=function(t){return this.uploadData=t,this._actualUpload()},r.prototype.upload=function(){var t,r;return this.deferred=e.Deferred(),t=this.createPreFlightParams(),r=this.getPreflightUrl(),e.ajaxJSON(r,"POST",t,this.onPreflightComplete),this.deferred},r.prototype._actualUpload=function(){return this._xhr=new XMLHttpRequest,this._xhr.upload.addEventListener("progress",this.trackProgress,!1),this._xhr.onload=this.onUploadPosted,this._xhr.open("POST",this.uploadData.upload_url,!0),this._xhr.send(this.createFormData())},r.prototype.onUploadPosted=function(){},r.prototype.trackProgress=function(t){return this.progress=t.loaded/t.total,this.onProgress(this.progress,this.file)},r.prototype.getProgress=function(){return this.progress},r.prototype.roundProgress=function(){var t;return t=this.getProgress()||0,Math.min(Math.round(100*t),100)},r.prototype.getFileName=function(){return this.options.name||this.file.name},r.prototype.abort=function(){return this._xhr.abort()},r}()})}).call(this);