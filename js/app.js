const pages=[...document.querySelectorAll('.page')];
const navItems=[...document.querySelectorAll('.nav-item')];
const completedPractices=JSON.parse(localStorage.getItem('cncPracticesV2')||'[]');
function showPage(id){pages.forEach(p=>p.classList.toggle('active',p.id===id));navItems.forEach(n=>n.classList.toggle('active',n.dataset.section===id));window.scrollTo({top:0,behavior:'smooth'});}
navItems.forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.section)));
document.querySelectorAll('[data-go]').forEach(c=>c.addEventListener('click',()=>showPage(c.dataset.go)));
document.querySelectorAll('.hotspots button').forEach(b=>b.addEventListener('click',()=>{const box=document.createElement('div');box.className='hotspot-label';box.textContent=b.dataset.tip;b.parentElement.querySelectorAll('.hotspot-label').forEach(x=>x.remove());box.style.left=b.style.left;box.style.top=b.style.top;b.parentElement.appendChild(box);}));
document.querySelectorAll('.interactive-question').forEach(q=>q.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{const f=q.querySelector('.feedback');const ok=b.dataset.option===q.dataset.answer;f.textContent=ok?'✓ Correcto. Z es el eje vertical en este esquema.':'✕ Revisa el diagrama: X, Y y Z representan direcciones diferentes.';f.className='feedback '+(ok?'good':'bad');})));
function save(){localStorage.setItem('cncPracticesV2',JSON.stringify(completedPractices));updateProgress();}
function updateProgress(){document.querySelectorAll('.practice').forEach((p,i)=>{const n=i+1,done=completedPractices.includes(n),unlocked=n===1||completedPractices.includes(n-1);p.classList.toggle('done',done);p.classList.toggle('locked',!unlocked);const st=p.querySelector('.status'),btn=p.querySelector('.sim-start');if(done){st.textContent='✓ COMPLETADA';if(btn){btn.textContent='✓ Completada';btn.disabled=true;}}else if(unlocked){st.textContent='DISPONIBLE';if(btn){btn.textContent='▶ Iniciar práctica';btn.disabled=false;}}else{st.textContent='🔒 BLOQUEADA';if(btn){btn.textContent=`🔒 Completa la práctica ${n-1}`;btn.disabled=true;}}});
document.querySelectorAll('.mini-practice').forEach((m,i)=>{const n=i+1,done=completedPractices.includes(n),unlocked=n===1||completedPractices.includes(n-1);m.classList.toggle('done',done);m.classList.toggle('locked-mini',!unlocked);});
const count=completedPractices.length,pct=Math.round(count/3*100);document.getElementById('progressCount').textContent=count;document.getElementById('progressPct').textContent=pct+'%';document.getElementById('progressBar').style.width=pct+'%';}
window.markPractice=n=>{if(!completedPractices.includes(n)){completedPractices.push(n);completedPractices.sort((a,b)=>a-b);save();}};
updateProgress();

// Guía paso a paso para introducir un programa (simulación educativa)
(()=>{
 const loadSteps=[
  ['Entrar al área de programa','Con el control en estado seguro, localiza el área Programa / Program Manager según la interfaz instalada.'],
  ['Crear o seleccionar','Crea un programa nuevo o selecciona el archivo correcto. Confirma el nombre antes de editar.'],
  ['Introducir el código','Introduce los bloques con el teclado o transfiere el archivo por el método autorizado para ese equipo.'],
  ['Guardar cambios','Usa la función de guardar y verifica que el programa aparezca en la lista de programas.'],
  ['Verificar antes de usar','Revisa sintaxis, unidades, origen, herramientas y límites; después solicita revisión del instructor.']
 ];let li=0;
 const title=document.getElementById('loadTitle');if(!title)return;
 const draw=()=>{document.getElementById('loadCount').textContent=`PASO ${li+1} DE ${loadSteps.length}`;title.textContent=loadSteps[li][0];document.getElementById('loadText').textContent=loadSteps[li][1];document.getElementById('loadPrev').disabled=li===0;document.getElementById('loadNext').disabled=li===loadSteps.length-1;document.querySelectorAll('#loadTutorial + .tutorial-index li').forEach((x,i)=>x.classList.toggle('active',i===li));};
 document.getElementById('loadPrev').addEventListener('click',()=>{li=Math.max(0,li-1);draw()});document.getElementById('loadNext').addEventListener('click',()=>{li=Math.min(loadSteps.length-1,li+1);draw()});draw();
})();
// Guía interactiva de carga, simulación, Single Block, Dry Run y ejecución
(()=>{
 const steps=[
  ['1. Cargar programa','Abre el administrador de programas, selecciona el archivo correcto y confirma el nombre. No ejecutes aún.','img/display_programa.jpg'],
  ['2. Simular','Activa la simulación disponible y revisa la trayectoria, el orden de bloques y cualquier advertencia.','img/display_programa.jpg'],
  ['3. Single Block','Activa Single Block para revisar el programa bloque a bloque durante una comprobación supervisada.','img/display_coordenadas.jpg'],
  ['4. Dry Run','Si el equipo lo permite, usa Dry Run según el procedimiento del laboratorio para comprobar movimientos sin el corte normal.','img/mesa_cnc.jpg'],
  ['5. Cycle Start','Solo después de autorización, comprobaciones y zona despejada, el operador responsable inicia el ciclo con Cycle Start.','img/display_programa.jpg']
 ];let i=0;const title=document.getElementById('execTitle');if(!title)return;
 const draw=()=>{document.getElementById('execCount').textContent=`PASO ${i+1} DE ${steps.length}`;title.textContent=steps[i][0];document.getElementById('execText').textContent=steps[i][1];document.getElementById('execImage').src=steps[i][2];document.getElementById('execImage').alt=steps[i][0];document.getElementById('execPrev').disabled=i===0;document.getElementById('execNext').disabled=i===steps.length-1;document.querySelectorAll('#execIndex li').forEach((x,n)=>x.classList.toggle('active',n===i));};
 document.getElementById('execPrev').addEventListener('click',()=>{i=Math.max(0,i-1);draw()});document.getElementById('execNext').addEventListener('click',()=>{i=Math.min(steps.length-1,i+1);draw()});draw();
})();
