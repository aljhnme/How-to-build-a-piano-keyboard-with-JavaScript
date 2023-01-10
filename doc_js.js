
playing_CK = 'playing_K';

const click_for_play_Sound = e => {
   
   const keyboard_key = e.keyCode;
   const key_n_Element = document.querySelector(`button[data-key="${keyboard_key}"]`);
   key_n_Element.classList.add(playing_CK);

   sounds_piano_keys(keyboard_key);
};

function sounds_piano_keys(key)
{
  var key_p = 'sounds_piano_keys/'+ key + ".mp3";
  var audio = new Audio(key_p);
  audio.play();
}

const Return_to_normal = e => {
  e.target.classList.remove(playing_CK);
}

const e_buttons = Array.from(document.querySelectorAll('button'));
e_buttons.forEach(R_C);

function R_C(item){
  item.addEventListener('transitionend',Return_to_normal,false);
}

window.addEventListener('keydown' , click_for_play_Sound);
