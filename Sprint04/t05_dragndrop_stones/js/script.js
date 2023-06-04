const blocks = document.getElementsByClassName('block');

for (let index = 0; index < blocks.length; index++) {
    let block = blocks[index];
    
    if (block.classList.contains('active')) block.classList.remove('active_block');
    else block.classList.add('active');

    block.onmousedown = function(event) {
        function moveAt(event) {
            block.style.left = event.pageX - block.offsetWidth / 2 + 'px';
            block.style.top = event.pageY - block.offsetHeight / 2 + 'px';
        }

        document.onmousemove = function(event) {
            moveAt(event)
        }

        block.onmouseup = function() {
            document.onmousemove = null;
            block.onmouseup = null;
        }

        if (block.classList.contains('active')) {
            document.onmousemove = null;
            block.onmouseup = null;
        }

        block.onclick = function() {
            if (block.classList.contains('active')) {
                block.classList.remove('active');
            }
            else {
                block.classList.add('active');
            }
        }
    }
}
