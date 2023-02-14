var canvas = new fabric.Canvas('myCanvas');
block_y=1;
block_x=1;

block_image_width=150;
block_image_height=150;

block_image_object="";

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(IMG){
      block_image_object=IMG;
      block_image_object.scaleToWidth(block_image_width);
      block_image_object.scaleToHeight(block_image_height);
      block_image_object.set({
        top:block_y,
      left:block_x
      });
      canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed=='65'){
        new_image('um.jpeg');
    }
    if(keyPressed=='66'){
        new_image('dois.jpeg');
    }
    if(keyPressed=='67'){
        new_image('tres.jpeg');
    }
    if(keyPressed=='68'){
        new_image('quatro.jpeg');
    }
    if(keyPressed=='69'){
        new_image('cinco.jpeg');
    }
}