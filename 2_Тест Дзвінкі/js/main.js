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
        function bSound() {
            const B = new Audio('img/song/B.ogg');
            B.play();
        }
        function dSound() {
            const D = new Audio('img/song/D.ogg');
            D.play();
        }
        function piSound() {
            const pi = new Audio('img/song/PI.ogg');
            pi.play();
        }
        function gSound() {
            const g = new Audio('img/song/G.ogg');
            g.play();
        }
        function giSound() {
            const gi = new Audio('img/song/GI.ogg');
            gi.play();
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
       trueShow, trueAnswer, falseShow, falseAnswer, falseNext, questionSound, bSound, takuSound, dSound, piSound,
        gSound, giSound, grade, gradeTrue, num: bam, resault
        

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
