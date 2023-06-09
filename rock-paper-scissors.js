let calc = JSON.parse(localStorage.getItem('calc'));
            if( calc === null){
                calc = {
                    win : 0,
                    lose : 0,
                    tie : 0
                };
            }
            
             // to convert back to js
            function res(para){
                
                let compu = get();
                let result = '';
                if(para === 'rock'){
                    if(compu === 'rock'){
                        result = 'tie';
                       
                    }
                    else if(compu === 'paper'){
                        result = 'lost';
                        
                    }
                    else if (compu === 'Scissors'){
                        result = 'win';
                       
                    }
                }
                else if(para === 'paper'){
                    if(compu === 'rock'){
                        result = 'win';
                        
                    }
                    else if(compu === 'paper'){
                        result = 'tie';
                        
                    }
                    else if (compu === 'Scissors'){
                        result = 'lost';
                        
                    }
                }
                else if(para === 'Scissors'){
                    if(compu === 'rock'){
                        result = 'lost';
                        
                    }
                    else if(compu === 'paper'){
                        result = 'win';
                       
                    }
                    else if (compu === 'Scissors'){
                        result = 'tie';
                        
                    }
                    
                }
                if(result === 'win'){
                        calc.win += 1;
                    }
                    else if (result === 'lost'){
                        calc.lose += 1;
                    }
                    else if(result === 'tie'){
                        calc.tie += 1;
                    }
                update();
                document.querySelector('.r').innerHTML = ` you ${result}`;
                document.querySelector('.req').innerHTML = `you choose ${para}.computer choose ${compu}`;
                localStorage.setItem('calc',JSON.stringify(calc)); //--> LOCAL STORAGE only supports string
                
                
                
                function get(){
                    let comp = Math.random();
                    let val = '';
                    if ( comp >= 0 && comp < 1/3){
                        val = 'rock';
                }
                    else if (comp >= 1/3 && comp < 2/3){
                        val = 'paper';
                } 
                    else if (comp >= 2/3 && comp < 1){
                        val = 'Scissors';
                }
                    return val;
            }
        }
                        
            function update(){
                    document.querySelector('.js-score').innerHTML = `wins ${calc.win} lost ${calc.lose} tie ${calc.tie}`;
                    
                }