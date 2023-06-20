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
        function kSound() {
            const K = new Audio('img/song/K.ogg');
            K.play();
        }
        function shSound() {
            const SH = new Audio('img/song/SH.ogg');
            SH.play();
        }
        function tSound() {
            const t = new Audio('img/song/T.ogg');
            t.play();
        }
        function sSound() {
            const s = new Audio('img/song/S.ogg');
            s.play();
        }
        function fSound() {
            const f = new Audio('img/song/F.ogg');
            f.play();
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
       trueShow, trueAnswer, falseShow, falseAnswer, falseNext, questionSound, kSound, takuSound, shSound, tSound,
        sSound, fSound, grade, gradeTrue, num: bam, resault
        

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
