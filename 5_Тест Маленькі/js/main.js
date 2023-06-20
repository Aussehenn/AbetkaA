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
        function aSound() {
            const A = new Audio('img/song/A.ogg');
            A.play();
        }
        function shSound() {
            const SH = new Audio('img/song/UI.ogg');
            SH.play();
        }
        function tSound() {
            const t = new Audio('img/song/E.ogg');
            t.play();
        }
        function sSound() {
            const s = new Audio('img/song/UE.ogg');
            s.play();
        }
        function fSound() {
            const f = new Audio('img/song/K.ogg');
            f.play();
        }
        function atakuSound() {
            const taku = new Audio('img/song/mA.ogg');
            taku.play();
        }
        function uitakuSound() {
            const uit = new Audio('img/song/mU.ogg');
            uit.play();
        }
        function etakuSound() {
            const et = new Audio('img/song/mE.ogg');
            et.play();
        }
        function ueakuSound() {
            const uet = new Audio('img/song/mUe.ogg');
            uet.play();
        }
        function ktakuSound() {
            const mk = new Audio('img/song/mK.ogg');
            mk.play();
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
       trueShow, trueAnswer, falseShow, falseAnswer, falseNext, questionSound, aSound, atakuSound, shSound, tSound,
        sSound, fSound, grade, gradeTrue, num: bam, resault,uitakuSound, etakuSound, ueakuSound,ktakuSound
        

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
