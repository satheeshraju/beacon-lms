(function(){define(["i18n!react_files","jquery","react","compiled/react/shared/utils/withReactDOM","compiled/fn/preventDefault","compiled/views/FileBrowserView","../modules/customPropTypes","../utils/moveStuff"],function(e,o,t,i,s,r,n,l){var a;return a=t.createClass({displayName:"MoveDialog",propTypes:{rootFoldersToShow:t.PropTypes.arrayOf(n.folder).isRequired,thingsToMove:t.PropTypes.arrayOf(n.filesystemObject).isRequired,closeDialog:t.PropTypes.func.isRequired},getInitialState:function(){return{destinationFolder:null}},componentDidMount:function(){var o;return this.props.setTitle(e.t("move_question",{one:"Where would you like to move %{item}?",other:"Where would you like to move these %{count} items?"},{count:this.props.thingsToMove.length,item:null!=(o=this.props.thingsToMove[0])?o.displayName():void 0})),new r({onlyShowFolders:!0,rootFoldersToShow:this.props.rootFoldersToShow,onClick:this.onSelectFolder}).render().$el.appendTo(this.refs.FolderTreeHolder.getDOMNode()).find(":tabbable:first").focus()},onSelectFolder:function(e,o){return e.preventDefault(),this.setState({destinationFolder:o})},submit:function(){var e;return e=l(this.props.thingsToMove,this.state.destinationFolder),e.then(this.props.closeDialog),o(this.refs.form.getDOMNode()).disableWhileLoading(e)},render:i(function(){return form({ref:"form",className:"form-dialog",onSubmit:s(this.submit)},div({className:"form-dialog-content"},div({ref:"FolderTreeHolder"})),div({className:"form-controls"},button({type:"button",className:"btn",onClick:this.props.closeDialog},e.t("cancel","Cancel")),button({type:"submit",disabled:!this.state.destinationFolder,className:"btn btn-primary","data-text-while-loading":e.t("moving","Moving...")},e.t("move","Move"))))})})})}).call(this);