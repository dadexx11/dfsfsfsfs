var animalsData = {
  
    // unique song id
    song_number: 2,
    
    song_name: "Martin Garrix - Animals",
    
    bpm:128,
  
    // mappings of sound to key
    mappings:{
        chain1:["a0", "a1", "a2", "a3", "c0", "","b0", "b1", "b2", "b3", "d12","d13",
                "a4", "a5", "a6", "a7", "c4", "","b4", "b5", "b6", "b7", "",   "",
                "a8", "a9", "a10","a11","c12","","b8", "b9", "b10","b11","d14","d15",
                "a12","a13","a14","a15","c8", "","b12","b13","b14","b15","",   ""],
                
        chain2:["c12","c4","",   "",   "",   "a0","d0", "d1", "d2", "d3", "","",
                "c8", "",  "c5", "c6", "c7", "",  "d4", "d5", "d6", "d7", "","",
                "c0", "c1","c9", "c10","c11","",  "d8", "d9", "d10","d11","","",
                "c3", "c2","c13","c14","c15","",  "d12","d13","d14","d15","",""],
                
        chain3:["b0", "b1", "b2", "b3", "d0", "d1", "d2", "d3", "a0","a1","a2", "a3",
                "b4", "b5", "b6", "b7", "d4", "d5", "d6", "d7", "a4","a5","a6", "a7",
                "b8", "b9", "b10","b11","d8", "d9", "d10","d11","c4","c5","c6", "",
                "b12","b13","b14","b15","d12","d13","d14","d15","c8","c9","c10","",],
                
        chain4:["","","","","","","","","","","","",
                "","","","","","","","","","","","",
                "","","","","","","","","","","","",
                "","","","","","","","","","","",""]
    },
    
    // which keys need to be held to play through
    holdToPlay:{
        chain1:[],
        
        chain2:[],
        
        chain3:[],
        
        chain4:[]
    },
    
    // sets of keys that are linked (only one can be playing at a time)
    linkedAreas:{
        chain1:[],
        
        chain2:[],
        
        chain3:[],
        
        chain4:[]
    },
  
  soundUrls:{
    chain1:{
        a0:"https://www.dropbox.com/s/24of3sydjfigjua/a0.mp3?dl=0",
        a1:"https://www.dropbox.com/s/evrvyzs2hj2r4h3/a1.mp3?dl=0",
        a2:"https://www.dropbox.com/s/aqdvo41bvlapkfq/a2.mp3?dl=0",
        a3:"https://www.dropbox.com/s/9a58k8uohhqvlw0/a3.mp3?dl=0",
        a4:"https://www.dropbox.com/s/xxhipqfmn05n9yv/a4.mp3?dl=0",
        a5:"https://www.dropbox.com/s/zxid3wyl9ow0w9b/a5.mp3?dl=0",
        a6:"https://www.dropbox.com/s/3eb22d8p69osckw/a6.mp3?dl=0",
        a7:"https://www.dropbox.com/s/ag1rbh1w8i03fl0/a7.mp3?dl=0",
        a8:"https://www.dropbox.com/s/jt643fwuqmq0pl5/a8.mp3?dl=0",
        a9:"https://www.dropbox.com/s/wsx2033zttu629w/a9.mp3?dl=0",
        a10:"https://www.dropbox.com/s/3wbs7zwhqd84pmx/a10.mp3?dl=0",
        a11:"https://www.dropbox.com/s/zxfe9039rapd96m/a11.mp3?dl=0",
        a12:"https://www.dropbox.com/s/d4s6f51xlu456bk/a12.mp3?dl=0",
        a13:"https://www.dropbox.com/s/4nyh9cedy6vmlkx/a13.mp3?dl=0",
        a14:"https://www.dropbox.com/s/hbsrbwg3mvf1ozt/a14.mp3?dl=0",
        a15:"https://www.dropbox.com/s/6mz8kxvdlzy1xkn/a15.mp3?dl=0",
        b0:"https://www.dropbox.com/s/gbns14of72usoug/b0.mp3?dl=0",
        b1:"https://www.dropbox.com/s/px7cay6lwa3tkyf/b1.mp3?dl=0",
        b2:"https://www.dropbox.com/s/x6uwt7kvdaonn6k/b2.mp3?dl=0",
        b3:"https://www.dropbox.com/s/v10abn3awhf82rp/b3.mp3?dl=0",
        b4:"https://www.dropbox.com/s/z85mw3lk3xoxclq/b4.mp3?dl=0",
        b5:"https://www.dropbox.com/s/osqapyymd68ezet/b5.mp3?dl=0",
        b6:"https://www.dropbox.com/s/7ql76d8uv7flucq/b6.mp3?dl=0",
        b7:"https://www.dropbox.com/s/glvucgdg0i75xt3/b7.mp3?dl=0",
        b8:"https://www.dropbox.com/s/0hk5b4771fksgx0/b8.mp3?dl=0",
        b9:"https://www.dropbox.com/s/k54muusk33lo8o9/b9.mp3?dl=0",
        b10:"https://www.dropbox.com/s/3o2nk2yymtq1ve3/b10.mp3?dl=0",
        b11:"https://www.dropbox.com/s/iuvczf16s7d0e3c/b11.mp3?dl=0",
        b12:"https://www.dropbox.com/s/9xdhxh39gyx0lz1/b12.mp3?dl=0",
        b13:"https://www.dropbox.com/s/muo755nq1dqk658/b13.mp3?dl=0",
        b14:"https://www.dropbox.com/s/5f6uv2g7d4gc9nk/b14.mp3?dl=0",
        b15:"https://www.dropbox.com/s/tpk45p5p7zqh1hn/b15.mp3?dl=0",
        c0:"https://www.dropbox.com/s/brxwhhyfwsrz0t4/c0.mp3?dl=0",
        c1:"https://www.dropbox.com/s/yvwt6x7bsq9q43i/c1.mp3?dl=0",
        c2:"https://www.dropbox.com/s/63aw822xh1hcug6/c2.mp3?dl=0",
        c3:"https://www.dropbox.com/s/gj2mlkusx2ib0zu/c3.mp3?dl=0",
        c4:"https://www.dropbox.com/s/5fcczzmt9ajihlo/c4.mp3?dl=0",
        c5:"https://www.dropbox.com/s/1r22c6cqc6cq86b/c5.mp3?dl=0",
        c6:"https://www.dropbox.com/s/v1chct2o71rhd8n/c6.mp3?dl=0",
        c7:"https://www.dropbox.com/s/g6678lnw92k2a5y/c7.mp3?dl=0",
        c8:"https://www.dropbox.com/s/kwpeaarw2fu54op/c8.mp3?dl=0",
        c9:"https://www.dropbox.com/s/lfdk1mjialn2zqy/c9.mp3?dl=0",
        c10:"https://www.dropbox.com/s/v4v1jymi91vafcq/c10.mp3?dl=0",
        c11:"https://www.dropbox.com/s/8fprdc8306dfyb7/c11.mp3?dl=0",
        c12:"https://www.dropbox.com/s/u9j1flyw88rz2t1/c12.mp3?dl=0",
        c13:"https://www.dropbox.com/s/8mm2wzz9lx9vxft/c13.mp3?dl=0",
        c14:"https://www.dropbox.com/s/5tuk6ayt9l92fgh/c14.mp3?dl=0",
        c15:"https://www.dropbox.com/s/5tuk6ayt9l92fgh/c14.mp3?dl=0",
        d0:"https://www.dropbox.com/s/5xz3i9ngj64z1kn/d0.mp3?dl=0",
        d1:"https://www.dropbox.com/s/3lnlr39gx9vbq1j/d1.mp3?dl=0",
        d2:"https://www.dropbox.com/s/bflkfpocy5fnqcf/d2.mp3?dl=0",
        d3:"https://www.dropbox.com/s/r7k0wfitsfutzcr/d3.mp3?dl=0",
        d4:"https://www.dropbox.com/s/m6ngso23s59t5u0/d4.mp3?dl=0",
        d5:"https://www.dropbox.com/s/v2w47tyal81ebdj/d5.mp3?dl=0",
        d6:"https://www.dropbox.com/s/59or7ab5yfctb7i/d6.mp3?dl=0",
        d7:"https://www.dropbox.com/s/rtv0yp9y9ah3mnj/d7.mp3?dl=0",
        d8:"https://www.dropbox.com/s/i6s6maei4rwjkyt/d8.mp3?dl=0",
        d9:"https://www.dropbox.com/s/y2qjzfx5554iq2a/d9.mp3?dl=0",
        d10:"https://www.dropbox.com/s/lhh0scu0v31bx37/d10.mp3?dl=0",
        d11:"https://www.dropbox.com/s/69ziq9p91dxhgxp/d11.mp3?dl=0",
        d12:"https://www.dropbox.com/s/f87sesevzoimnbd/d12.mp3?dl=0",
        d13:"https://www.dropbox.com/s/xel2w4d6k9ev0a4/d13.mp3?dl=0",
        d14:"https://www.dropbox.com/s/1ujrm1llyjhhf4q/d14.mp3?dl=0",
        d15:"https://www.dropbox.com/s/ylegh66sv8vf3za/d15.mp3?dl=0"
    },
    chain2:{
        a0:"https://www.dropbox.com/s/24of3sydjfigjua/a0.mp3?dl=0",
        c0:"https://www.dropbox.com/s/brxwhhyfwsrz0t4/c0.mp3?dl=0",
        c1:"https://www.dropbox.com/s/yvwt6x7bsq9q43i/c1.mp3?dl=0",
        c2:"https://www.dropbox.com/s/63aw822xh1hcug6/c2.mp3?dl=0",
        c3:"https://www.dropbox.com/s/gj2mlkusx2ib0zu/c3.mp3?dl=0",
        c4:"https://www.dropbox.com/s/5fcczzmt9ajihlo/c4.mp3?dl=0",
        c5:"https://www.dropbox.com/s/1r22c6cqc6cq86b/c5.mp3?dl=0",
        c6:"https://www.dropbox.com/s/v1chct2o71rhd8n/c6.mp3?dl=0",
        c7:"https://www.dropbox.com/s/g6678lnw92k2a5y/c7.mp3?dl=0",
        c8:"https://www.dropbox.com/s/kwpeaarw2fu54op/c8.mp3?dl=0",
        c9:"https://www.dropbox.com/s/lfdk1mjialn2zqy/c9.mp3?dl=0",
        c10:"https://www.dropbox.com/s/v4v1jymi91vafcq/c10.mp3?dl=0",
        c11:"https://www.dropbox.com/s/8fprdc8306dfyb7/c11.mp3?dl=0",
        c12:"https://www.dropbox.com/s/u9j1flyw88rz2t1/c12.mp3?dl=0",
        c13:"https://www.dropbox.com/s/8mm2wzz9lx9vxft/c13.mp3?dl=0",
        c14:"https://www.dropbox.com/s/5tuk6ayt9l92fgh/c14.mp3?dl=0",
        c15:"https://www.dropbox.com/s/5tuk6ayt9l92fgh/c14.mp3?dl=0",
        d0:"https://www.dropbox.com/s/5xz3i9ngj64z1kn/d0.mp3?dl=0",
        d1:"https://www.dropbox.com/s/3lnlr39gx9vbq1j/d1.mp3?dl=0",
        d2:"https://www.dropbox.com/s/bflkfpocy5fnqcf/d2.mp3?dl=0",
        d3:"https://www.dropbox.com/s/r7k0wfitsfutzcr/d3.mp3?dl=0",
        d4:"https://www.dropbox.com/s/m6ngso23s59t5u0/d4.mp3?dl=0",
        d5:"https://www.dropbox.com/s/v2w47tyal81ebdj/d5.mp3?dl=0",
        d6:"https://www.dropbox.com/s/59or7ab5yfctb7i/d6.mp3?dl=0",
        d7:"https://www.dropbox.com/s/rtv0yp9y9ah3mnj/d7.mp3?dl=0",
        d8:"https://www.dropbox.com/s/i6s6maei4rwjkyt/d8.mp3?dl=0",
        d9:"https://www.dropbox.com/s/y2qjzfx5554iq2a/d9.mp3?dl=0",
        d10:"https://www.dropbox.com/s/lhh0scu0v31bx37/d10.mp3?dl=0",
        d11:"https://www.dropbox.com/s/69ziq9p91dxhgxp/d11.mp3?dl=0",
        d12:"https://www.dropbox.com/s/f87sesevzoimnbd/d12.mp3?dl=0",
        d13:"https://www.dropbox.com/s/xel2w4d6k9ev0a4/d13.mp3?dl=0",
        d14:"https://www.dropbox.com/s/1ujrm1llyjhhf4q/d14.mp3?dl=0",
        d15:"https://www.dropbox.com/s/ylegh66sv8vf3za/d15.mp3?dl=0"
    },
    chain3:{
        a0:"https://www.dropbox.com/s/vnrtm2j1bvoh9oh/a0.mp3?dl=0",
        a1:"https://www.dropbox.com/s/lt4vyxazw2e1x1y/a1.mp3?dl=0",
        a2:"https://www.dropbox.com/s/lt4vyxazw2e1x1y/a1.mp3?dl=0",
        a3:"https://www.dropbox.com/s/t8gbi9krhu3kzcu/a3.mp3?dl=0",
        a4:"https://www.dropbox.com/s/fif2wpz5evgbl9v/a4.mp3?dl=0",
        a5:"https://www.dropbox.com/s/9ryllfhafk2fs2z/a5.mp3?dl=0",
        a6:"https://www.dropbox.com/s/xruvrulvwguhl1i/a6.mp3?dl=0",
        a7:"https://www.dropbox.com/s/42o9a9lq59fs5d0/a7.mp3?dl=0",
        b0:"https://www.dropbox.com/s/97dfbql8olr6kaa/b0.mp3?dl=0",
        b1:"https://www.dropbox.com/s/pbnvlbudz303bzf/b1.mp3?dl=0",
        b2:"https://www.dropbox.com/s/2puxejv2s33v053/b2.mp3?dl=0",
        b3:"https://www.dropbox.com/s/cm882o9evoa8l1w/b3.mp3?dl=0",
        b4:"https://www.dropbox.com/s/g8yue60ii16cs89/b4.mp3?dl=0",
        b5:"https://www.dropbox.com/s/os3a4sjm9y1ftvz/b5.mp3?dl=0",
        b6:"https://www.dropbox.com/s/bz9zllc1doifr6f/b6.mp3?dl=0",
        b7:"https://www.dropbox.com/s/p9i1knnt52ckd0m/b7.mp3?dl=0",
        b8:"https://www.dropbox.com/s/74aq0azsvsumejm/b8.mp3?dl=0",
        b9:"https://www.dropbox.com/s/o7ctz41bezc313o/b9.mp3?dl=0",
        b10:"https://www.dropbox.com/s/1kmiadcvh67h7mo/b10.mp3?dl=0",
        b11:"https://www.dropbox.com/s/3yiynls4t0kdd32/b11.mp3?dl=0",
        b12:"https://www.dropbox.com/s/ux3o6k9c0d2f1we/b12.mp3?dl=0",
        b13:"https://www.dropbox.com/s/d5ctm54sfyxr6ez/b13.mp3?dl=0",
        b14:"https://www.dropbox.com/s/xc7e4micy2x5qgb/b14.mp3?dl=0",
        b15:"https://www.dropbox.com/s/k9n0v390uy8oj26/b15.mp3?dl=0",
        c4:"https://www.dropbox.com/s/x82mgq8n5mo5m68/c4.mp3?dl=0",
        c5:"https://www.dropbox.com/s/mykx6q5ssrsuav6/c5.mp3?dl=0",
        c6:"https://www.dropbox.com/s/hjr5bd2l13kigk6/c6.mp3?dl=0",
        c8:"https://www.dropbox.com/s/psqqx3vbocheiwk/c8.mp3?dl=0",
        c9:"https://www.dropbox.com/s/2f9b108ocpap3qp/c9.mp3?dl=0",
        c10:"https://www.dropbox.com/s/awqxxn5cz5ve9on/c10.mp3?dl=0",
        d0:"https://www.dropbox.com/s/17n7gsqunwuta2c/d0.mp3?dl=0",
        d1:"https://www.dropbox.com/s/kctl9qwvwin0898/d1.mp3?dl=0",
        d2:"https://www.dropbox.com/s/5iuqrmikxj5jzu8/d2.mp3?dl=0",
        d3:"https://www.dropbox.com/s/qwwiu4omjvygk6w/d3.mp3?dl=0",
        d4:"https://www.dropbox.com/s/8mjygq8a9kr7njv/d4.mp3?dl=0",
        d5:"https://www.dropbox.com/s/sb1fj3ld4ck6hr1/d5.mp3?dl=0",
        d6:"https://www.dropbox.com/s/vpqd53fjspbb7ev/d6.mp3?dl=0",
        d7:"https://www.dropbox.com/s/8i7ex359cirdj45/d7.mp3?dl=0",
        d8:"https://www.dropbox.com/s/5gpbifv025fxk5i/d8.mp3?dl=0",
        d9:"https://www.dropbox.com/s/8j7fq0qe172uj04/d9.mp3?dl=0",
        d10:"https://www.dropbox.com/s/lyueht6y4ptkzv4/d10.mp3?dl=0",
        d11:"https://www.dropbox.com/s/tf0jmq6r579z2ws/d11.mp3?dl=0",
        d12:"https://www.dropbox.com/s/9mefgxc50mdm9sk/d12.mp3?dl=0",
        d13:"https://www.dropbox.com/s/tawjlcj9qk2aws5/d13.mp3?dl=0",
        d14:"https://www.dropbox.com/s/l6qok92e0b8katf/d14.mp3?dl=0",
        d15:"https://www.dropbox.com/s/e6p88sjwq922h2l/d15.mp3?dl=0"
    },
    chain4:{
      
    }
  }
}