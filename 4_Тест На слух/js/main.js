import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
createApp({
    setup() {
        const trueShow = ref(false)
        const falseShow = ref(false)
        let grade = "0"
        let bam = ""
        let resault = localStorage.getItem('savedMessage');

        function questionSound() {
            const question = new Audio('img/song/rozgl.ogg');
            question.play();
        }
        function giSound() {
            const gi = new Audio('img/song/GI.ogg');
            gi.play();
        }
        function lSound() {
            const l = new Audio('img/song/L.ogg');
            l.play();
        }
        function uSound() {
            const u = new Audio('img/song/U.ogg');
            u.play();
        }
        function oSound() {
            const o = new Audio('img/song/O.ogg');
            o.play();
        }
        function cSound() {
            const c = new Audio('img/song/C.ogg');
            c.play();
        }
        function takuSound() {
            const taku = new Audio('img/song/taku.ogg');
            taku.play();
        }
        
        function falseNext() {
            falseShow.value = false
        }
        function falseAnswer() {
            falseShow.value = true
        }
        function trueAnswer() {
            trueShow.value = true
        }
        function gradeTrue() {
            gradeValue()
            trueShow.value = true
        }

    return {
       trueShow, trueAnswer, falseShow, falseAnswer, falseNext, questionSound, giSound, takuSound, lSound, uSound,
        oSound, cSound, grade, gradeTrue, num: bam, resault
        

    }
},
methods: {
    saveToLocalStorage() {
        localStorage.setItem('savedMessage', this.num);
        let bam = localStorage.getItem('savedMessage', this.num++);
        bam++
        localStorage.setItem('savedMessage', bam);
        console.log(bam)  
      },
      saveToLocalStoragee() {
        let baam = localStorage.getItem('savedMessage');
        baam++
        localStorage.setItem('savedMessage', baam);
        console.log(baam)  
      },
      saveReset() {
        localStorage.setItem('savedMessage', "0");
      }
}
}).mount('#app')
