formation_selected = 0;


//Selectionne une formation. Agrandit ca largeur en modifiant les class et enregistre la formatione slectionné pour pouvoir la refermer après.
function select_formation(id) {
    if(formation_selected != 0) {
        document.getElementById(formation_selected).classList.add('miniature_formation');
        document.getElementById(formation_selected).classList.remove('miniature_grande');
    }

    formation_selected = id;

    document.getElementById(id).classList.remove('miniature_formation');
    document.getElementById(id).classList.add('miniature_grande');

    document.getElementById('open').classList.add('anim_button_open');

}

// Ouvre l'onglet info de la formation
function open_infos_formation() {
    document.getElementById('info_formation').classList.add('anim_open_infos_formation');
    window.scrollTo(0, 2000);
}

// Ferme l'onglet info de la formation
function close_infos_formations() {
    document.getElementById('info_formation').classList.remove('anim_open_infos_formation');
    document.getElementById('info_formation').classList.remove('anim_close_infos_formation');
}