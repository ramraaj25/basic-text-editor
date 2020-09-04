/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */


document.getElementById('text-input').oninput = () => {
  updateText()
}

makeBold()

makeItalic()

makeUnderline()

setListenersForAlignment()



/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
function updateText() {
  // CODE GOES HERE
  document.getElementById('text-output').innerText = document.getElementById('text-input').value
}



/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold(elem) {
  //CODE GOES HERE
  document.getElementById('bold').onclick = () => {
    document.getElementById('text-output').classList.toggle('bold')
    document.getElementById('bold').classList.toggle('active')
  }
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem) {
  document.getElementById('italic').onclick = () => {

    document.getElementById('text-output').classList.toggle('italic')
    document.getElementById('italic').classList.toggle('active')

  }
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem) {
  //CODE GOES HERE
  document.getElementById('underline').onclick = () => {
    document.getElementById('underline').classList.toggle('active')
    document.getElementById('text-output').classList.toggle('underline')
  }

}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */

function setListenersForAlignment() {

  document.getElementById('left-align').classList.add('active')

  document.getElementById('left-align').onclick = () => { alignText(document.getElementById('text-output'), 'left') }

  document.getElementById('center-align').onclick = () => { alignText(document.getElementById('text-output'), 'center') }

  document.getElementById('right-align').onclick = () => { alignText(document.getElementById('text-output'), 'right') }
}

function alignText(elem, alignType) {
  // CODE GOES HERE

  document.getElementById('text-output').style.textAlign = alignType


  if (alignType == 'left') {
    document.getElementById('left-align').classList.add('active')
    document.getElementById('center-align').classList.remove('active')
    document.getElementById('right-align').classList.remove('active')
  }

  else if (alignType == 'center') {
    document.getElementById('center-align').classList.add('active')
    document.getElementById('left-align').classList.remove('active')
    document.getElementById('right-align').classList.remove('active')
  }

  else if (alignType == 'right') {
    document.getElementById('right-align').classList.add('active')
    document.getElementById('left-align').classList.remove('active')
    document.getElementById('center-align').classList.remove('active')
  }
}