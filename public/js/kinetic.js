

                $('#wrapper').kinetic();

                $('#left').click(function(){
                    $('#wrapper').kinetic('start', { velocity: -10 });
                });
                $('#right').click(function(){
                    $('#wrapper').kinetic('start', { velocity: 10 });
                });
                 $('#up').click(function(){
                    $('#wrapper').kinetic('start', { velocityY: -10 });
                });
                $('#down').click(function(){
                    $('#wrapper').kinetic('start', { velocityY: 10 });
                });


                $('#end').click(function(){
                    $('#wrapper').kinetic('end');
                });
                $('#stop').click(function(){
                    $('#wrapper').kinetic('stop');
                });
                $('#detach').click(function(){
                    $('#wrapper').kinetic('detach');
                });
                $('#attach').click(function(){
                    $('#wrapper').kinetic('attach');
                });

                $('#wrapper').kinetic({
                    filterTarget: function(target, e){
                        if (!/down|start/.test(e.type)){
                            return !(/area|a|input/i.test(target.tagName));
                        }
                    }
                });
