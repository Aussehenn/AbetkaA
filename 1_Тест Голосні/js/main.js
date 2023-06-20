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
        function oSound() {
            const O = new Audio('img/song/O.ogg');
            O.play();
        }
        function iSound() {
            const i = new Audio('img/song/I.ogg');
            i.play();
        }
        function ueSound() {
            const ue = new Audio('img/song/UE.ogg');
            ue.play();
        }
        function yaSound() {
            const ya = new Audio('img/song/YA.ogg');
            ya.play();
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
       trueShow, trueAnswer, falseShow, falseAnswer, falseNext, questionSound, aSound, takuSound, oSound, iSound,
        ueSound, yaSound, grade, gradeTrue, num: bam, resault
        

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
