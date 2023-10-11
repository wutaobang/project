window.onload = function() {
    let new_input = document.querySelector('.icon input')
    new_input.onkeydown = function(event) {
        if (event.keyCode == 13) {
            let input_text = new_input.value;
            
            let re = /^[\u4e00-\u9fa5]+$/;//
             if (re.test(input_text) & input_text.length <= 8){
                console.log(input_text)

                let template = document.querySelector('.template .todo-task');
                let template2 = template.cloneNode(true);
                template2.querySelector('.task-text').innerText = input_text;
                let first = document.querySelector('.todo-task1');
                document.querySelector('.doing-list').insertBefore(template2,first);
                new_input.value = ''
    
    
                let done = document.querySelector('.task-img');
                done.onclick = function(event) {
                    if (done.src.includes('gou')) {
                        done.setAttribute('src','./images/yuan.png');
                        document.querySelector('.doing-list').appendChild(done.parentElement.parentElement);
    
                        let text = done.parentElement.parentElement.querySelector('.task-text');
                        text.style.textDecoration = 'none';
                        
                    } else {
                        done.setAttribute('src','./images/gou.png');
    
                
                        document.querySelector('.doen-list').appendChild(done.parentElement.parentElement);
                        let text = done.parentElement.parentElement.querySelector('.task-text');
                        text.style.textDecoration = 'line-through';
                 
                    }
                }
             
            } else {
                alert('本网页只支持输入中文并且少于8个字，其他的符号都不行哦')
                new_input.value = ''

            } 

            //长按检测
            let del_list = document.querySelector('.todo-task');
            let del = document.querySelector('.todo-task img');
            let parent = document.querySelector('.todo-task');
            let img = document.querySelector('.template .template-img .list-bottom-img');
            
            del_list.onmousedown = function() {
                 time=setTimeout(()=>{
                    parent.appendChild(img);
                    img.onclick = function () {
                        document.querySelector('.doing-list').removeChild(del_list)
                        }
                    },1000);
                }
            del_list.onmouseup = function() {
              clearTimeout(time)
            }
        }
    }
}