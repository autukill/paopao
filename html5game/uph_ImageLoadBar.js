function ImageLoadBar_hook(ctx, width, height, total, current, image) {
	// change these to your liking:
	var backgroundColor = "#333399";
	var barBackgroundColor = "#FF0033";
	var barForegroundColor = "#FFCC33";
	var barBorderColor = "#006699";
	var barWidth = Math.round(width * 0.6);
	var barHeight = 40;
	var barBorderWidth = 2;
	var barOffset = 10;
	// background:
	ctx.fillStyle = backgroundColor;
	ctx.fillRect(0, 0, width, height);
	// image:
	var totalHeight, barTop;
	if (image != null) {
		totalHeight = image.height + barOffset + barHeight;
		var image_y = (height - totalHeight) >> 1;
		ctx.drawImage(image, (width - image.width) >> 1, image_y);
		barTop = image_y + image.height + barOffset;
	} else barTop = (height - barHeight) >> 1;
	// bar border:
	var barLeft = (width - barWidth) >> 1;
	ctx.fillStyle = barBorderColor;
	ctx.fillRect(barLeft, barTop, barWidth, barHeight);
	//
	var barInnerLeft = barLeft + barBorderWidth;
	var barInnerTop = barTop + barBorderWidth;
	var barInnerWidth = barWidth - barBorderWidth * 2;
	var barInnerHeight = barHeight - barBorderWidth * 2;
	// bar background:
	ctx.fillStyle = barBackgroundColor;
	ctx.fillRect(barInnerLeft, barInnerTop, barInnerWidth, barInnerHeight);
	// bar foreground:
	var process = current / total ;
	var barLoadedWidth = Math.round(barInnerWidth * process);
	ctx.fillStyle = barForegroundColor;
	ctx.fillRect(barInnerLeft, barInnerTop, barLoadedWidth, barInnerHeight);

	ctx.font = "31px Georgia "; 
    ctx.fillStyle = "#333300"; 
    ctx.textAlign='center';
    ctx.fillText( Math.round(process * 100)+ "%", barInnerLeft + barInnerWidth/2 , barInnerTop+25);

	//console.log(current + "/" + total);
}

function ImageLoadBar_remove(){
	var target = document.getElementById('GM4HTML5_loadingscreen');
	target.parentNode.removeChild(target);
}

function data_save( key , value){
	localStorage.setItem( key , value) ;
}
function data_read( key ){
	return (localStorage.getItem(key));
}
function data_delete(key){
	localStorage.removeItem(key)
}
function data_clear(){
	localStorage.clear();
}
function data_exist(key){
	return data_read(key) !=null ;
}