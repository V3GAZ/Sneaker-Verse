(()=>{'use strict';
const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
const assetPath=name=>'assets/'+name;
const EP=[
{id:'ep1',number:'01',title:'THE DISTRIBUTION GAME',subtitle:'Direkt oder indirekt?',intro:'Wer verkauft den Sneaker an wen? Vergleiche zwei Vertriebswege und ihre Folgen aus Sicht der Hersteller.',image:assetPath('profile-maker.webp'),tag:'VERTRIEBSFORMEN',short:'Hersteller, Händler und Vertriebswege',
answer:`<h4>Gegenüberstellung der Vertriebsformen</h4><p><b>Direktvertrieb:</b> Der Sneaker-Hersteller verkauft unmittelbar an Endkunden, etwa über den eigenen Onlineshop oder eine eigene Filiale. Der Vertriebsweg lautet: <b>Hersteller → Endkunde</b>. Beispiele sind der Onlineshop eines Sneaker-Herstellers und eigene Markengeschäfte.</p><p><b>Indirekter Vertrieb:</b> Der Hersteller setzt Absatzmittler ein. Dazu gehören spezialisierte Sneaker-Fachhändler wie 43einhalb, Overkill und Solebox. Der Weg lautet: <b>Hersteller → Fach-/Einzelhändler → Endkunde</b>. Diese Händler verkaufen im Laden, über ihren Onlineshop oder über beide Kanäle.</p><h4>Vor- und Nachteile aus Herstellersicht</h4><ul><li><b>Direkt – Vorteile:</b> Mehr Kontrolle über Markenauftritt, Preise und Kundenerlebnis; direkter Zugang zu Kundendaten und zur Handelsspanne.</li><li><b>Direkt – Nachteile:</b> Eigene Kosten für Shops, Lager, Logistik, Personal, Kundenservice und Marketing; mehr operatives Risiko.</li><li><b>Indirekt – Vorteile:</b> Mehr Reichweite durch etablierte Händler, Zugang zu deren Stammkunden, Beratungskompetenz und Ladenflächen sowie geringerer eigener Vertriebsaufwand.</li><li><b>Indirekt – Nachteile:</b> Geringere Kontrolle über Präsentation und Endkundenerlebnis, Abhängigkeit von Handelspartnern und geteilte Gewinnspanne.</li></ul><p><b>Fazit:</b> Für einen Hersteller ist die Kombination häufig sinnvoll: Direktvertrieb stärkt Kontrolle und Kundenbeziehung, indirekter Vertrieb schafft zusätzliche Reichweite und nutzt die Kompetenz des Fachhandels.</p>`},
{id:'ep2',number:'02',title:'RETAIL VS. ONLINE',subtitle:'Was überzeugt Sneakerheads?',intro:'Warum sind spezialisierte Sneakerhändler wichtig? Schalte zwischen Laden und Onlineshop um und vergleiche die Kaufkriterien.',image:assetPath('profile-retailer.webp'),tag:'KAUFPHASE',short:'Top-Händler & Kaufkriterien',
answer:`<h4>Bedeutung der Top-Sneakerhändler</h4><p>Rund 15 renommierte Top-Sneakerhändler – darunter 43einhalb, Overkill und Solebox – sind wichtige Vermittler zwischen Herstellern und einer kaufkräftigen, trendbewussten Szene. Mit einer kuratierten Auswahl, limitierten Releases, Szenewissen und Glaubwürdigkeit erreichen sie Sneakerheads besonders gezielt. Sie sind nicht nur Verkaufsorte, sondern auch Orte für Produktentdeckung, Beratung, Community und Markeninszenierung.</p><h4>Entscheidende Kaufkriterien im stationären Handel</h4><p>Die Befragten nennen besonders die <b>Freundlichkeit des Verkaufspersonals (94,4 %)</b>, die <b>Store-Atmosphäre (93,5 %)</b>, das <b>Touch-and-Feel-Erlebnis (91,7 %)</b>, die <b>Warenverfügbarkeit (91 %)</b> und die <b>Exklusivität des Sortiments (89,7 %)</b>. Im Laden können Sneaker anprobiert, Materialien geprüft und persönliche Empfehlungen eingeholt werden.</p><h4>Entscheidende Kaufkriterien beim Onlinekauf</h4><p>Online sind ein <b>sicheres Shopsystem (93,9 %)</b>, die <b>Warenverfügbarkeit (92,1 %)</b>, ein <b>schneller Bezahlvorgang (90,3 %)</b>, die <b>Exklusivität des Sortiments (88,6 %)</b> und die <b>Übersichtlichkeit des Onlineshops (88,6 %)</b> besonders wichtig.</p><p><b>Vergleich:</b> Stationär stehen persönliche Beratung, Atmosphäre und Anprobe im Mittelpunkt; online zählen Sicherheit, Verfügbarkeit, Geschwindigkeit und Orientierung.</p>`},
{id:'ep3',number:'03',title:'CONNECTED COMMERCE',subtitle:'Zwei Services, ein Einkauf.',intro:'Verfolge den Weg einer Bestellung zwischen Online-Shop und Filiale. Die beiden Services funktionieren in entgegengesetzte Richtungen.',image:assetPath('connected-commerce.webp'),tag:'OMNICHANNEL',short:'Click & Collect und In-Store-Order',
answer:`<h4>Click & Collect</h4><p>Bei <b>Click & Collect</b> wählt und bestellt der Kunde einen Sneaker online und holt ihn später in einer stationären Filiale ab. Der Ablauf lautet: <b>Online finden → online reservieren oder bestellen → Benachrichtigung → im Laden abholen</b>. Der Kunde spart gegebenenfalls Versandzeit und kann die Abholung in seinen Alltag integrieren; der Händler gewinnt einen zusätzlichen Ladenkontakt.</p><h4>Online-In-Store-Bestellung</h4><p>Bei einer <b>Online-In-Store-Bestellung</b> besucht der Kunde zuerst die Filiale. Ist Größe, Farbe oder Modell dort nicht verfügbar, sucht das Personal den Artikel im erweiterten digitalen Sortiment und bestellt ihn direkt im Laden. Der Ablauf lautet: <b>Filiale besuchen → gewünschtes Produkt fehlt → digital im Store bestellen → liefern oder später abholen</b>.</p><p><b>Wesentlicher Unterschied:</b> Click & Collect startet online und endet im Laden. Die Online-In-Store-Bestellung beginnt im stationären Geschäft und nutzt dort den digitalen Bestellkanal. Beide Services verbinden statt trennen die Vertriebskanäle.</p>`},
{id:'ep4',number:'04',title:'NO MORE DISCONNECTS',subtitle:'Kein Kunde geht verloren.',intro:'Ein Artikel ist online verfügbar, aber die Filiale kennt ihn nicht. Repariere den Kanalbruch und erkenne den Nutzen für Kunde und Händler.',image:assetPath('profile-sneakerhead.webp'),tag:'VERNETZUNG',short:'Kanalbrüche vermeiden & Nutzen',
answer:`<h4>Warum Kanalbrüche problematisch sind</h4><p>Ein <b>Kanalbruch</b> liegt vor, wenn der Wechsel zwischen Online- und Offlinekanal nicht nahtlos funktioniert – etwa wenn Filialbestände nicht mit dem Onlineshop verknüpft sind, Reservierungen im Laden nicht auftauchen oder Personal keine digitale Bestellung auslösen kann. Kunden müssen Informationen erneut suchen, erleben Unsicherheit und brechen den Kauf möglicherweise ab.</p><h4>Sicht des Händlers: Warum Click & Collect hilft</h4><p>Online-Bestellungen werden mit der Filiale verbunden. Reservierungen, verfügbare Produkte und Abholinformationen sind nachvollziehbar. Der Kunde kann sicher abholen; für den Händler steigen Servicequalität, Besuchsfrequenz und die Chance auf zusätzliche Käufe. Zudem wird der Kunde kanalübergreifend an das Unternehmen gebunden.</p><h4>Sicht des Händlers: Warum Online-In-Store hilft</h4><p>Die Filiale kann auf ein größeres digitales Sortiment zugreifen, statt bei fehlender Größe oder Farbe den Kunden wegschicken zu müssen. Das Personal schließt den Kauf unmittelbar an, obwohl die Ware lokal fehlt. Der Händler reduziert verlorene Umsätze und nutzt seine Beratungsstärke gemeinsam mit dem Onlinebestand.</p><h4>Konkreter Nutzen für Kunden</h4><p>Kunden erhalten mehr Auswahl, verlässliche Verfügbarkeitsinformationen, eine bequeme Abholung und flexible Lieferoptionen. Sie können online recherchieren, persönlich anprobieren oder im Laden bestellen, ohne ihre Customer Journey von vorn beginnen zu müssen.</p><p><b>Ergebnis:</b> Eine gemeinsame Daten- und Prozessbasis für Online-Shop und Filiale schafft ein einheitliches Markenerlebnis. Für Händler bedeutet das bessere Kundenbindung, zusätzliche Verkaufschancen und weniger Kaufabbrüche.</p>`}
];
const storage={get:(k,d)=>{try{const x=localStorage.getItem(k);return x?JSON.parse(x):d}catch{return d}},set:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}}};
const completed=new Set(storage.get('sv2-done',[])),saved=new Set(storage.get('sv2-favs',[]));let persona='custom',guided=false,guidedIndex=0,heroIndex=0,category='all',active=null,panel='',avatarData='',userName='',reduced=!!storage.get('sv2-motion',false),soft=!!storage.get('sv2-soft',false);let toastTimer=0;
// Personal data stays in the local browser only.
avatarData=storage.get('sv3-avatar','');userName=storage.get('sv3-name','');
const select=(id)=>EP.find(t=>t.id===id)||EP[0];
const syncSettings=()=>{$('body').classList.toggle('reduce-motion',reduced);$('body').classList.toggle('soft-scene',soft);};syncSettings();
function toast(text){const el=$('#toast');el.textContent=text;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2600)}
function screen(name){$$('.screen').forEach(x=>x.hidden=x.id!==name);document.body.dataset.screen=name;if(name==='profiles'){$('#custom-panel').hidden=true;$('#profile-grid').hidden=false}if(name==='landing'||name==='profiles')document.body.dataset.scene='night';window.scrollTo(0,0);document.body.scrollTop=0}
function setScene(k){document.body.dataset.scene=k||'night'}
function openPopover(title,bodyHTML){panel=title;$('#popover-title').textContent=title;$('#popover-body').innerHTML=bodyHTML;$('#popover').hidden=false;}
function closePopover(){$('#popover').hidden=true;panel=''}
function closeModal(){active=null;$('#modal').hidden=true;document.body.style.overflow='';$('#hero-start')?.focus()}
function openModal(id,fromJourney=false){
 // Only a fresh start at chapter 1, or a verified Next/Previous click, can belong to a complete four-episode run.
 // Opening another card from the dashboard cancels this sequence, without clearing saved progress.
 if(!fromJourney){guided=id==='ep1';guidedIndex=0}
 const e=select(id);closePopover();active=e.id;$('#modal').hidden=false;$('#modal-focus').hidden=true;document.body.style.overflow='hidden';$('#modal-label').textContent='EPISODE '+e.number+' / 04 · '+e.tag;$('#modal-heading').textContent=e.title;$('#modal-intro').textContent=e.intro;$('#answer-number').textContent=e.number+' / 04';$('#answer-text').innerHTML=e.answer;$('#modal-index').textContent=e.number+' / 04';$('#save-episode').innerHTML=saved.has(e.id)?'★ <span>Gespeichert</span>':'☆ <span>Merken</span>';$('#modal-previous').disabled=e.number==='01';$('#modal-done').textContent=e.number==='04'?'VERSTANDEN · ABSCHLIESSEN ✓':'VERSTANDEN · WEITER →';renderInteractive(e.id);$('#modal-scroll')?.scrollTo(0,0);$('.modal-scroll').scrollTop=0;$('#modal-close').focus()}
const categories={all:['ep1','ep2','ep3','ep4'],journey:['ep1','ep2','ep3','ep4'],distribution:['ep1','ep2','ep3','ep4'],retail:['ep2','ep1','ep3','ep4'],services:['ep3','ep4','ep2','ep1']};
const TOPICS={
 journey:[
  {title:'DER ERSTE HYPE',sub:'Touchpoints vor dem Kauf',ep:'ep2',tag:'VORKAUF',image:'art-erster-hype.webp',focus:'journey'},
  {title:'IM STORE ODER ONLINE?',sub:'Wo wird die Kaufentscheidung getroffen?',ep:'ep2',tag:'KAUFPHASE',image:'profile-retailer.webp',focus:'store'},
  {title:'CONNECTED COMMERCE',sub:'Nahtlos von online zu offline',ep:'ep3',tag:'OMNICHANNEL',image:'connected-commerce.webp',focus:'collect'},
  {title:'NACH DEM KAUF',sub:'Service, Bindung und Feedback',ep:'ep4',tag:'NACHKAUF',image:'topic-after.webp',focus:'benefit'}],
 distribution:[
  {title:'DIREKTVERTRIEB',sub:'Hersteller → Kunde',ep:'ep1',tag:'VERTRIEB',image:'topic-direct.webp',focus:'direct'},
  {title:'INDIREKTER VERTRIEB',sub:'Hersteller → Fachhändler → Kunde',ep:'ep1',tag:'VERTRIEB',image:'topic-indirect.webp',focus:'indirect'},
  {title:'VORTEILE',sub:'Kontrolle, Marge, Reichweite',ep:'ep1',tag:'HERSTELLER',image:'profile-maker.webp',focus:'direct'},
  {title:'RISIKEN',sub:'Aufwand und Handelspartner',ep:'ep1',tag:'HERSTELLER',image:'card-city.webp',focus:'indirect'}],
 retail:[
  {title:'TOP-SNEAKERHÄNDLER',sub:'43einhalb, Overkill und Solebox',ep:'ep2',tag:'FACHHANDEL',image:'topic-retail.webp',focus:'store'},
  {title:'IN-STORE EXPERIENCE',sub:'Personal, Anprobe, Atmosphäre',ep:'ep2',tag:'STATIONÄR',image:'art-in-store-experience.webp',focus:'store'},
  {title:'ONLINE EXPERIENCE',sub:'Sicherheit, Bestand, Checkout',ep:'ep2',tag:'DIGITAL',image:'topic-online.webp',focus:'online'},
  {title:'KAUFKRITERIEN',sub:'Die wichtigsten Prozentwerte',ep:'ep2',tag:'VERGLEICH',image:'art-kaufkriterien.webp',focus:'online'}],
 services:[
  {title:'CLICK & COLLECT',sub:'Online bestellen → Store abholen',ep:'ep3',tag:'SERVICE',image:'topic-collect.webp',focus:'collect'},
  {title:'ONLINE IN-STORE',sub:'Im Geschäft digital bestellen',ep:'ep3',tag:'SERVICE',image:'topic-instore.webp',focus:'instore'},
  {title:'KANALBRUCH',sub:'Was den Kunden frustriert',ep:'ep4',tag:'PROBLEM',image:'art-kanalbruch.webp',focus:'bad'},
  {title:'LÖSUNG & NUTZEN',sub:'Warum sich Omnichannel lohnt',ep:'ep4',tag:'LÖSUNG',image:'art-loesung-nutzen.webp',focus:'good'}]
};
/* Individuelle, direkt erreichbare Unterkapitel: bewusst getrennt vom geführten Episodenplayer. */
const TOPIC_CONTENT={
 journey:[
 {lead:'Die Reise beginnt lange vor dem Kauf. Sneakerheads entdecken Modelle, vergleichen Shops und tauschen sich über Drops aus.',points:[['Der erste Kontakt','Social Media, Sneaker-Websites und Empfehlungen machen auf neue Releases aufmerksam.'],['Wichtige Touchpoints','Sneakerheads entdecken neue Modelle über soziale Netzwerke, Sneaker-Websites und Empfehlungen aus der Community.'],['Für den Händler','Ein glaubwürdiger Auftritt, genaue Produktinfos und sichtbare Verfügbarkeit sorgen dafür, dass aus Aufmerksamkeit Kaufinteresse wird.']],take:'Vorkauf heißt: gesehen werden, Vertrauen gewinnen und Orientierung bieten.'},
 {lead:'Der Kunde entscheidet nicht nur, welchen Sneaker er will, sondern auch, wo und wie er ihn kauft.',points:[['Im Store','Beratung, Anprobe, Atmosphäre und die Möglichkeit, Materialien direkt zu erleben, geben Sicherheit.'],['Online','Sicherer Checkout, ein übersichtliches Angebot, Verfügbarkeit und schnelle Zahlung erleichtern die Entscheidung.'],['Im Zusammenspiel','Sneakerheads kaufen kanalübergreifend. Wer im Laden stöbert, kann später online bestellen – oder umgekehrt.']],take:'Ein Kauf kann in einem Kanal beginnen und in einem anderen enden.'},
 {lead:'Omnichannel verbindet die Touchpoints. Kunden wechseln zwischen Onlineshop und Filiale, ohne ihre Kaufreise neu beginnen zu müssen.',points:[['Click & Collect','Online auswählen und bestellen; anschließend das Paket in der Filiale abholen.'],['Online-In-Store','Ein nicht vorrätiges Modell direkt im Laden über das digitale Sortiment bestellen.'],['Der gemeinsame Nenner','Aktuelle Bestände, einheitliche Kundendaten und abgestimmte Prozesse verhindern Kanalbrüche.']],take:'Nicht zwei getrennte Shops, sondern ein gemeinsames Einkaufserlebnis.'},
 {lead:'Die Customer Journey endet nicht an der Kasse. Service, Kommunikation und Community entscheiden über Wiederkäufe.',points:[['Kontakt halten','Social-Media-Kanäle, Händler-Websites und Events ermöglichen laufenden Austausch.'],['Nach dem Kauf helfen','Informationen zu Versand, Rückgabe und Produktpflege stärken das Vertrauen.'],['Bindung schaffen','Guter Service und glaubwürdige Community-Angebote machen aus Käufern loyale Stammkunden.']],take:'Der nächste Kauf beginnt häufig mit einer guten Erfahrung nach dem letzten.'}
 ],
 distribution:[
 {lead:'Beim Direktvertrieb verkauft der Hersteller unmittelbar an den Endkunden – ohne selbstständigen Einzelhändler als Absatzmittler.',points:[['Der Vertriebsweg','HERSTELLER → KUNDE, z. B. im eigenen Markenshop oder im Hersteller-Onlineshop.'],['Stärke','Marke, Preise, Präsentation und Kundenbeziehung lassen sich direkt gestalten.'],['Herausforderung','Der Hersteller muss Lager, Logistik, Shops, Beratung und Retouren selbst organisieren.']],take:'Mehr Kontrolle bedeutet auch mehr eigene Verantwortung.'},
 {lead:'Beim indirekten Vertrieb verkauft der Hersteller über Handelspartner wie spezialisierte Sneaker-Stores.',points:[['Der Vertriebsweg','HERSTELLER → FACHHÄNDLER → KUNDE.'],['In der Sneaker-Szene','43einhalb, Overkill und Solebox verbinden ihre Online-Angebote mit stationären Touchpoints.'],['Stärke und Grenze','Der Hersteller gewinnt Reichweite und Beratungskompetenz, gibt aber einen Teil der Marge und Markenkontrolle ab.']],take:'Der Handel bringt Produkte dorthin, wo die Zielgruppe bereits vertraut einkauft.'},
 {lead:'Warum wählen Hersteller überhaupt verschiedene Vertriebsformen? Weil jeder Kanal unterschiedliche Stärken hat.',points:[['Direkte Vorteile','Höhere Kontrolle über Markenwelt, Daten und Preisgestaltung; unmittelbares Feedback der Käufer.'],['Indirekte Vorteile','Zusätzliche Reichweite, bestehende Stammkundschaft, lokale Präsenz und Beratung im spezialisierten Store.'],['Kombination','Ein Mix aus eigenem Shop und Fachhandel erreicht mehr Käufer und hält mehrere Wege offen.']],take:'Erfolgreich ist nicht zwingend ein Kanal allein, sondern ein sinnvoller Mix.'},
 {lead:'Mehr Kanäle erhöhen die Möglichkeiten – aber auch Komplexität und Abhängigkeiten.',points:[['Risiken beim Direktvertrieb','Eigene Kosten für Technik, Versand, Kundenservice und Retouren sowie Investitionen in Ladenflächen.'],['Risiken beim indirekten Vertrieb','Abhängigkeit von Händlern, geteilte Handelsspanne und weniger Kontrolle über die Präsentation.'],['Risiken im Kanal-Mix','Unterschiedliche Preise, Verfügbarkeiten und Informationen können Kunden irritieren; Händlerkonflikte sind möglich.']],take:'Die passende Vertriebsstrategie muss Nutzen, Kosten und Kontrolle ausbalancieren.'}
 ],
 retail:[
 {lead:'Spezialisierte Sneakerhändler sind für Sneakerheads mehr als bloße Verkaufsstellen.',points:[['Bekannte Szeneakteure','43einhalb, Overkill und Solebox stehen für spezialisierte Händler mit einem eigenen Profil in der Sneaker-Szene.'],['Ihre Bedeutung','Sie verbinden Hersteller und eine trendbewusste Community durch Sortimentsauswahl, limitierte Releases und Glaubwürdigkeit.'],['Mehr als Produkte','Events, Beratung und Erlebnis im Store können Bindung und Markenidentifikation stärken.']],take:'Top-Händler sind Vertriebskanal, Informationsquelle und Szene-Treffpunkt zugleich.'},
 {lead:'Der stationäre Store punktet mit Dingen, die ein Bildschirm nicht ersetzen kann.',points:[['94,4 %','Freundlichkeit des Verkaufspersonals ist ein zentrales Kriterium.'],['93,5 %','Die Atmosphäre im Store ist für die Befragten besonders wichtig.'],['91,7 %','Touch & Feel: Sneaker anprobieren und Materialien erleben.']],take:'Der Store verkauft auch Beratung, Inszenierung und Sicherheit bei der Auswahl.'},
 {lead:'Im Onlineshop zählen Zuverlässigkeit, Tempo und eine klare Benutzerführung.',points:[['93,9 %','Ein sicheres Shopsystem gehört zu den wichtigsten Kriterien.'],['92,1 %','Warenverfügbarkeit: Ist das gewünschte Paar in der passenden Größe auf Lager?'],['90,3 %','Ein schneller Bezahlvorgang reduziert Reibung im Kaufprozess.']],take:'Online überzeugt ein Shop, wenn der Kunde schnell, sicher und übersichtlich zum Kauf kommt.'},
 {lead:'Beim Sneakerkauf setzen Fans im Store und online unterschiedliche Prioritäten.',points:[['Stationär','Personal (94,4 %), Atmosphäre (93,5 %), Touch & Feel (91,7 %).'],['Online','Sicherheit (93,9 %), Verfügbarkeit (92,1 %), schneller Checkout (90,3 %).'],['Für Händler','Beide Kanäle müssen ihre eigenen Stärken ausspielen und zugleich zusammenarbeiten.']],take:'Im Laden zählt das Erlebnis. Online zählt ein schneller, sicherer und übersichtlicher Kauf.'}
 ],
 services:[
 {lead:'Click & Collect verbindet eine Online-Bestellung mit der Abholung im stationären Laden.',points:[['01 · Online finden','Sneaker auswählen und Größe sowie Abholmöglichkeit prüfen.'],['02 · Online bestellen','Die Bestellung oder Reservierung erfolgt über den Onlineshop.'],['03 · Im Store abholen','Der Kunde erhält eine Benachrichtigung und nimmt den Sneaker vor Ort mit.']],take:'Start: online. Ziel: Filiale. Vorteil: bequeme Planung und persönlicher Kontakt.'},
 {lead:'Online-In-Store beginnt im Laden, wenn der gewünschte Artikel vor Ort nicht verfügbar ist.',points:[['01 · Im Laden beraten','Der Kunde sucht eine Größe oder Farbe; das Personal unterstützt.'],['02 · Digital ergänzen','Der Händler prüft den erweiterten Online-Bestand und bestellt direkt im Geschäft.'],['03 · Lieferung/Abholung','Der Sneaker kommt nach Hause oder wird später im Store abgeholt.']],take:'Start: Filiale. Ergänzung: digital. Vorteil: Ein fehlender Lagerartikel wird nicht zum verlorenen Verkauf.'},
 {lead:'Ein Kanalbruch entsteht, wenn der Wechsel von online zu offline oder umgekehrt nicht funktioniert.',points:[['Das Problem','Der Onlineshop zeigt Verfügbarkeit, aber die Filiale kann weder reservieren noch bestellen.'],['Die Folge für Kunden','Frust, erneute Suche, doppelte Angaben und im schlimmsten Fall ein Kaufabbruch.'],['Die Lösung','Gemeinsame Bestandsdaten, nachvollziehbare Bestellungen und geschulte Mitarbeiter.']],take:'Ein einheitlicher Prozess wirkt aus Kundensicht wie ein einziges Unternehmen.'},
 {lead:'Omnichannel-Services nutzen Händlern und Kunden auf unterschiedliche, aber zusammenhängende Weise.',points:[['Nutzen für Kunden','Mehr Auswahl, bequemere Abholung, flexible Lieferung und keine erneute Suche.'],['Nutzen für Händler','Weniger Kaufabbrüche, stärkere Kundenbindung, zusätzliche Store-Besuche und Verkaufschancen.'],['Woran Erfolg hängt','Verknüpfte Daten, abgestimmtes Personal und verlässliche Informationen in jedem Kanal.']],take:'Der Wechsel zwischen Kanälen wird zu einem Service statt zu einer Hürde.'}
 ]
};
let activeTopic=null;
function openTopic(tab,index){
 const t=TOPICS[tab]?.[index],d=TOPIC_CONTENT[tab]?.[index];if(!t||!d)return;
 closePopover();if(!$('#modal').hidden)closeModal();
 activeTopic={tab,index};const overlay=$('#topic-overlay');
 $('#topic-kicker').textContent=t.tag+' · UNTERKAPITEL '+String(index+1).padStart(2,'0')+'/04';
 $('#topic-title').textContent=t.title;$('#topic-lead').textContent=d.lead;
 $('#topic-art').src=assetPath(t.image);$('#topic-art').alt='Illustration: '+t.title;
 $('#topic-points').innerHTML=d.points.map(([heading,body],i)=>`<article class="topic-point"><span class="topic-point-index">${String(i+1).padStart(2,'0')}</span><div><h3>${heading}</h3><p>${body}</p></div></article>`).join('');
 $('#topic-takeaway').textContent=d.take;
 $('#topic-index').textContent=String(index+1).padStart(2,'0')+' / 04';
 $('#topic-prev').disabled=index===0;$('#topic-next').textContent=index===3?'Zum ersten Thema ↻':'Nächstes Unterthema →';
 $('#topic-to-episode').textContent='Ganze Episode '+select(t.ep).number+' ansehen ↗';
 overlay.hidden=false;document.body.style.overflow='hidden';$('#topic-scroll').scrollTop=0;$('#topic-close').focus();
}
function closeTopic(){activeTopic=null;$('#topic-overlay').hidden=true;document.body.style.overflow='';}
$('#topic-close').onclick=closeTopic;$('#topic-scrim').onclick=closeTopic;
$('#topic-prev').onclick=()=>{if(activeTopic)openTopic(activeTopic.tab,Math.max(0,activeTopic.index-1))};
$('#topic-next').onclick=()=>{if(activeTopic)openTopic(activeTopic.tab,(activeTopic.index+1)%4)};
$('#topic-to-episode').onclick=()=>{if(!activeTopic)return;const topic=TOPICS[activeTopic.tab][activeTopic.index];closeTopic();openModal(topic.ep)};

function shelf(){
 const c=category;
 const titles={all:'FÜR DICH ENTDECKT',journey:'DIE CUSTOMER JOURNEY',distribution:'VERTRIEBSFORMEN',retail:'HÄNDLER & KAUFPHASE',services:'OMNICHANNEL & SERVICES'};
 const subs={all:'Vier Episoden. Vier Antworten. Wähle deinen Einstieg.',journey:'Vorkauf → Kauf → Service → Nachkauf: die Reise im Überblick.',distribution:'Wähle einen Vertriebsweg und sieh die Herstellerperspektive.',retail:'Entdecke Fachhändler und wechsle zwischen Laden und Onlineshop.',services:'Zwei digitale Services, ihre Vorteile und die Vermeidung von Kanalbrüchen.'};
 $('#shelf-title').textContent=titles[c];$('#shelf-subtitle').textContent=subs[c];
 if(c==='all'){
  $('#episode-cards').innerHTML=EP.map(e=>`<button class="episode-card ${completed.has(e.id)?'completed':''}" data-episode="${e.id}" aria-label="Episode ${e.number}: ${e.title}"><img src="${e.image}" alt=""><span class="number">${e.number} · ${e.tag}</span><span class="card-play">▶</span><span class="card-body"><b>${e.title}</b><small>${e.short}</small></span></button>`).join('');
  $$('[data-episode]').forEach(b=>b.onclick=()=>openModal(b.dataset.episode));
 }else{
  $('#episode-cards').innerHTML=TOPICS[c].map((t,i)=>`<button class="episode-card topic-card" data-topic="${i}" aria-label="${t.title}: ${t.sub}"><img src="${assetPath(t.image)}" alt=""><span class="topic-kicker">${t.tag}</span><span class="card-play">↗</span><span class="card-body"><b>${t.title}</b><small>${t.sub}</small></span></button>`).join('');
  $$('[data-topic]').forEach(b=>b.onclick=()=>openTopic(category,Number(b.dataset.topic)));
 }
 $$('[data-tab]').forEach(b=>b.classList.toggle('active',b.dataset.tab===category));
}
function hero(){
 const isTopic=category!=='all', topic=isTopic?TOPICS[category][heroIndex%4]:null;
 $('.hero').classList.toggle('topic-hero',isTopic);
 const e=isTopic?select(topic.ep):select(categories[category][heroIndex%4]);
 $('#hero-img').src=isTopic?assetPath(topic.image):e.image;
 $('#hero-eyebrow').innerHTML='<i></i> '+(isTopic?'UNTERKAPITEL '+String(heroIndex+1).padStart(2,'0')+' / 04':'FEATURED · EPISODE '+e.number);
 $('#hero-head').innerHTML=isTopic?topic.title.replace(/ (ODER|&|UND) /,'<br>$1 ').replace(/ (EXPERIENCE|VERTRIEB|COMMERCE)/,'<br><em>$1</em>'):(e.number==='01'?'THE DISTRIBUTION<br><em>GAME.</em>':e.number==='02'?'RETAIL VS.<br><em>ONLINE.</em>':e.number==='03'?'CONNECTED<br><em>COMMERCE.</em>':'NO MORE<br><em>DISCONNECTS.</em>');
 $('#hero-copy').textContent=isTopic?TOPIC_CONTENT[category][heroIndex%4].lead:e.intro;
 $('#hero-start').innerHTML=isTopic?'↗ &nbsp; UNTERKAPITEL ÖFFNEN':'▶ &nbsp; EPISODE STARTEN';
 $('#hero-details').innerHTML=isTopic?'ⓘ &nbsp; DETAILS ANSEHEN':'ⓘ &nbsp; ANSEHEN';
 $('#hero-dots').innerHTML=categories[category].map((_,i)=>`<button data-dot="${i}" aria-label="${isTopic?'Unterkapitel':'Slide'} ${i+1}" class="${heroIndex===i?'active':''}"></button>`).join('');
 $$('[data-dot]').forEach(b=>b.onclick=()=>{heroIndex=+b.dataset.dot;hero()});
}
function openHero(){if(category==='all')openModal(categories[category][heroIndex%4]);else openTopic(category,heroIndex%4)}
function setCategory(k){category=k;heroIndex=0;shelf();hero();$$('[data-go]').forEach(b=>b.classList.toggle('active',b.dataset.go==='home'&&k==='all'))}
function updateProgress(){const n=completed.size;$('#seen-count').textContent=n+' / 4 EPISODEN';$('#total-progress').style.width=(n/4*100)+'%';$('#unread-dot').hidden=n===4;
$('#continue-list').innerHTML=EP.map(e=>`<button class="continue-item" data-resume="${e.id}"><img src="${e.image}" alt=""><span class="continue-label"><b>${e.number} · ${e.tag}</b><small>${completed.has(e.id)?'Gesehen · Noch einmal':'Noch entdecken'}</small><span class="microtrack"><span style="width:${completed.has(e.id)?100:7}%"></span></span></span><span>▶</span></button>`).join('');$$('[data-resume]').forEach(b=>b.onclick=()=>openModal(b.dataset.resume));shelf()}
function completeCurrent(){
 if(!active)return;
 const id=active, idx=EP.findIndex(e=>e.id===id);
 completed.add(id);storage.set('sv2-done',[...completed]);updateProgress();
 // The Next button is navigation, not a test of already-saved progress.
 // It ALWAYS advances to the next episode, even if all four were visited last week.
 const isSequential=guided && guidedIndex===idx;
 if(!isSequential){guided=false;guidedIndex=0}
 if(idx<EP.length-1){
   if(isSequential)guidedIndex=idx+1;
   openModal(EP[idx+1].id,isSequential);
   return;
 }
 closeModal();
 if(isSequential){
   guided=false;guidedIndex=0;
   storage.set('sv3-finale-seen',true);
   startMatrix(true);
 }else{
   guided=false;guidedIndex=0;
   toast('Episode 04 abgeschlossen ✦ Die gesamte Journey kannst du über ▶ starten.');
 }
}

function enter(profile){persona=profile;guided=profile==='custom';guidedIndex=0;setScene(profile==='custom'?'night':profile);const captions={sneakerhead:'SNEAKERHEAD · KUNDENSICHT',retailer:'HÄNDLER · STORE EXPERIENCE',maker:'HERSTELLER · VERTRIEBSSTRATEGIE',custom:'DEINE JOURNEY · ALLE 4 AUFGABEN'};$('#current-profile').textContent=profile==='custom'?(userName.toUpperCase()||'DEINE JOURNEY')+' · GUIDED EXPERIENCE':captions[profile];let badge=$('#profile-toggle');badge.textContent=profile==='retailer'?'H':profile==='maker'?'M':profile==='sneakerhead'?'S':(userName[0]||'D').toUpperCase();if(profile==='custom'&&avatarData)setCustomAvatar();setCategory(profile==='retailer'?'retail':profile==='maker'?'distribution':profile==='sneakerhead'?'journey':'all');updateProgress();screen('app');openModal(profile==='retailer'?'ep2':profile==='sneakerhead'?'ep2':'ep1',profile==='custom')}
function renderInteractive(id){const el=$('#interactive');if(id==='ep1'){el.innerHTML=`<h3>WÄHLE DEN VERTRIEBSWEG</h3><div class="chooser"><button class="choice active" data-path="direct">Direktvertrieb</button><button class="choice" data-path="indirect">Indirekter Vertrieb</button></div><div class="route" id="route-visual"></div><div class="two-col"><div class="info-tile"><h4>VORTEIL FÜR DEN HERSTELLER</h4><p id="path-pro"></p></div><div class="info-tile"><h4>NACHTEIL FÜR DEN HERSTELLER</h4><p id="path-con"></p></div></div>`;const draw=(mode)=>{const direct=mode==='direct';$('#route-visual').innerHTML=direct?'<div class="route-node">HERSTELLER</div><span class="route-arrow">→</span><div class="route-node">ENDKUNDE</div>':'<div class="route-node">HERSTELLER</div><span class="route-arrow">→</span><div class="route-node">FACHHÄNDLER</div><span class="route-arrow">→</span><div class="route-node">ENDKUNDE</div>';$('#path-pro').textContent=direct?'Eigene Preis- und Markenkontrolle, direkter Kundenkontakt, mögliche höhere Handelsspanne.':'Reichweite und Szeneglaubwürdigkeit durch etablierte Händler, Beratung und bestehende Kundschaft.';$('#path-con').textContent=direct?'Eigene Investitionen in Shops, Logistik, Personal, Kundenservice und Marketing.':'Abhängigkeit vom Handelspartner, geteilter Gewinn und weniger Kontrolle über die Präsentation.';$$('[data-path]').forEach(b=>b.classList.toggle('active',b.dataset.path===mode))};$$('[data-path]').forEach(b=>b.onclick=()=>draw(b.dataset.path));draw('direct')}
else if(id==='ep2'){el.innerHTML=`<h3>WAS IST SNEAKERHEADS BESONDERS WICHTIG?</h3><div class="chooser"><button class="choice active" data-retail="store">Im Store</button><button class="choice" data-retail="online">Im Onlineshop</button></div><div class="two-col"><img id="retail-image" src="${assetPath('profile-retailer.webp')}" alt="" style="height:230px;width:100%;object-fit:cover;border-radius:15px"><div><h4 id="retail-head" style="margin:1px 0 6px"></h4><p id="retail-explain"></p><div id="retail-facts" class="fact-grid"></div></div></div><p style="margin-top:11px;font-size:11px;color:#b0a6c7">Die wichtigsten Kriterien im direkten Vergleich.</p>`;const draw=mode=>{const store=mode==='store';$('#retail-image').src=store?assetPath('profile-retailer.webp'):assetPath('card-digital.webp');$('#retail-head').textContent=store?'DAS ERLEBNIS IM LADEN':'DER KAUF IM ONLINESHOP';$('#retail-explain').textContent=store?'Persönliche Beratung und die Atmosphäre prägen den Einkauf.':'Online überzeugen Vertrauen, Bestand und ein reibungsloser Checkout.';const stats=store?[['94,4 %','Freundlichkeit'],['93,5 %','Atmosphäre'],['91,7 %','Touch & Feel'],['91 %','Warenverfügbarkeit']]:[['93,9 %','Sicheres Shopsystem'],['92,1 %','Warenverfügbarkeit'],['90,3 %','Schneller Checkout'],['88,6 %','Übersichtlichkeit']];$('#retail-facts').innerHTML=stats.map(([x,t])=>`<div class="fact"><strong>${x}</strong><p>${t}</p></div>`).join('');$$('[data-retail]').forEach(b=>b.classList.toggle('active',b.dataset.retail===mode))};$$('[data-retail]').forEach(b=>b.onclick=()=>draw(b.dataset.retail));draw('store')}
else if(id==='ep3'){let mode='collect',step=0;el.innerHTML=`<h3>FOLGE DEM BESTELLWEG</h3><div class="chooser"><button class="choice active" data-service="collect">Click & Collect</button><button class="choice" data-service="instore">Online-In-Store-Bestellung</button></div><div class="steps" id="service-steps"></div><div class="case-feedback" id="service-explain"></div><div style="display:flex;justify-content:space-between;gap:12px;margin-top:13px"><button class="choice" id="service-back">← Zurück</button><button class="choice" id="service-next">Nächster Schritt →</button></div>`;const labels={collect:['Online-Shop','Online bestellen','Abholhinweis','Im Store abholen'],instore:['Store besuchen','Artikel fehlt','Digital bestellen','Lieferung/Abholung']},descs={collect:['Der Kunde findet sein Modell im Onlineshop.','Er bestellt das Paar zur Abholung in der Filiale.','Der Händler bestätigt, wann die Bestellung bereitliegt.','Der Kunde holt das Paar vor Ort ab und kann sich beraten lassen.'],instore:['Der Kunde sucht im Geschäft nach einem bestimmten Modell.','Die gewünschte Größe ist dort nicht auf Lager.','Das Personal nutzt das digitale Sortiment und löst die Bestellung aus.','Der Sneaker wird verschickt oder später im Geschäft abgeholt.']};function draw(){const items=labels[mode];$('#service-steps').innerHTML=items.map((x,i)=>`<button type="button" class="step ${i===step?'current':''}" data-step="${i}" aria-current="${i===step?'step':'false'}" aria-label="Schritt ${i+1}: ${x}"><span>${i+1}</span><b>${x}</b></button>`).join('');$('#service-explain').textContent=descs[mode][step];$$('[data-service]').forEach(b=>b.classList.toggle('active',b.dataset.service===mode));$$('[data-step]').forEach(b=>b.onclick=()=>{step=Number(b.dataset.step);draw()});$('#service-back').disabled=step===0;$('#service-next').textContent=step===3?'Nochmal ansehen ↻':'Nächster Schritt →'}$$('[data-service]').forEach(b=>b.onclick=()=>{mode=b.dataset.service;step=0;draw()});$('#service-back').onclick=()=>{step=Math.max(0,step-1);draw()};$('#service-next').onclick=()=>{step=(step+1)%4;draw()};draw()}
else if(id==='ep4'){el.innerHTML=`<h3>REPARIERE DEN KANALBRUCH</h3><p>Du hast im Onlineshop einen Sneaker gesehen. Im Laden ist deine Größe nicht da. Was sollte der Händler tun?</p><div class="chooser" style="margin-top:13px"><button class="choice" data-fix="bad">„Leider ausverkauft.“</button><button class="choice" data-fix="good">Bestand verknüpfen & digital bestellen</button></div><div class="case-feedback" id="fix-result">Wähle eine Reaktion des Händlers, um den Unterschied zu sehen.</div><div class="two-col" style="margin-top:13px"><div class="info-tile"><h4>KUNDENNUTZEN</h4><p>Mehr Auswahl, weniger Aufwand, bequemere Bestellung und Abholung.</p></div><div class="info-tile"><h4>HÄNDLERNUTZEN</h4><p>Weniger Kaufabbrüche, zusätzliche Verkäufe und stärkere Kundenbindung.</p></div></div>`;$$('[data-fix]').forEach(b=>b.onclick=()=>{const good=b.dataset.fix==='good';$$('[data-fix]').forEach(x=>x.classList.toggle('active',x===b));$('#fix-result').innerHTML=good?'<b>✓ KANALBRUCH BEHOBEN</b> · Der Händler prüft den digitalen Bestand, bestellt das Paar direkt und bietet Lieferung oder Abholung an. Der Kauf bleibt im selben Unternehmen.':'<b>✕ KANALBRUCH</b> · Der Kunde muss erneut selbst suchen, wechselt womöglich zu einem anderen Anbieter und der Händler verliert den Verkauf.'})}
}
function listPopover(){openPopover('ALLE EPISODEN',`<p class="pop-note">Springe direkt zu einem der vier Arbeitsaufträge.</p>${EP.map(e=>`<button class="pop-row" data-open="${e.id}"><span>${e.number} · ${e.title}<br><small>${e.short}</small></span><b>${completed.has(e.id)?'✓':'→'}</b></button>`).join('')}`)}
function showStats(){openPopover('ZAHLEN & FAKTEN',`<p class="pop-note">Was Sneakerheads beim Kauf besonders wichtig ist.</p><div class="pop-row"><span>94,4 %<br><small>Freundlichkeit im Store</small></span><b>STORE</b></div><div class="pop-row"><span>93,5 %<br><small>Store-Atmosphäre</small></span><b>STORE</b></div><div class="pop-row"><span>93,9 %<br><small>Sicheres Shopsystem</small></span><b>ONLINE</b></div><div class="pop-row"><span>92,1 %<br><small>Warenverfügbarkeit</small></span><b>ONLINE</b></div><button class="pop-row" data-open="ep2">Zum vollständigen Vergleich →</button>`)}
function showSaved(){openPopover('MERKLISTE',saved.size?`${EP.filter(e=>saved.has(e.id)).map(e=>`<button class="pop-row" data-open="${e.id}">${e.number} · ${e.title} <b>→</b></button>`).join('')}`:'<p class="pop-note">Noch nichts gespeichert. Öffne eine Episode und wähle „Merken“.</p>')}
function showInfo(){openPopover('ÜBER DAS PROJEKT',`<p class="pop-note"><b>SNEAKER//VERSE · DES KUNDEN NEUE SNEAKER</b></p><p class="pop-note">Vier Perspektiven. Vier Episoden. Eine vernetzte Sneakerwelt – von der ersten Entdeckung bis zum Einkauf über alle Kanäle.</p><div class="pop-row"><span>Erstellt von<br><small>Sophie · Tom · George · Erik</small></span></div><div class="pop-row"><span>Ein besonderer Dank an<br><small>Frau Müller</small></span><button class="tiny-secret" data-egg="monsters" aria-label="Versteckte Nachricht" title="Geheime Notiz">✧</button></div><button class="pop-row" data-pop-action="profiles">Zu den vier Perspektiven <b>→</b></button>`)}
function showSearch(){openPopover('INHALTE SUCHEN',`<input class="search-box" id="search-field" placeholder="z. B. Click & Collect" aria-label="Suchbegriff"><div id="search-results"></div>`);$('#search-field').addEventListener('input',e=>{const q=e.target.value.toLocaleLowerCase('de');const results=q?EP.filter(x=>(x.title+' '+x.intro+' '+x.answer.replace(/<[^>]*>/g,' ')).toLocaleLowerCase('de').includes(q)):EP;$('#search-results').innerHTML=results.map(e=>`<button class="pop-row" data-open="${e.id}">${e.number} · ${e.title}<b>→</b></button>`).join('')||'<p class="pop-note">Keine Ergebnisse. Probiere einen anderen Begriff.</p>'});$('#search-field').dispatchEvent(new Event('input'));$('#search-field').focus()}
function showNotifications(){const remaining=EP.filter(e=>!completed.has(e.id));openPopover('NEUE INSIGHTS',remaining.length?`<p class="pop-note">Noch ${remaining.length} Kapitel zu entdecken.</p>${remaining.map(e=>`<button class="pop-row" data-open="${e.id}">${e.number} · ${e.title} <b>→</b></button>`).join('')}`:'<p class="pop-note">Alles gesehen! Du kannst alle Episoden jederzeit wieder öffnen.</p>')}
function showSettings(){openPopover('EINSTELLUNGEN',`<label class="pop-row toggle"><span>Animationen reduzieren</span><input type="checkbox" id="motion-pref" ${reduced?'checked':''}></label><label class="pop-row toggle"><span>Hintergrund beruhigen</span><input type="checkbox" id="scene-pref" ${soft?'checked':''}></label><button class="pop-row" data-pop-action="profiles">Profil wechseln <b>→</b></button><p class="pop-note">Alle Inhalte funktionieren auch offline. Dein Fortschritt wird nur auf diesem Gerät gespeichert.</p>`);$('#motion-pref').onchange=e=>{reduced=e.target.checked;storage.set('sv2-motion',reduced);syncSettings()};$('#scene-pref').onchange=e=>{soft=e.target.checked;storage.set('sv2-soft',soft);syncSettings()}}
$('#popover-body').addEventListener('click',e=>{const btn=e.target.closest('[data-open],[data-pop-action]');if(!btn)return;if(btn.dataset.open)openModal(btn.dataset.open);else if(btn.dataset.popAction==='profiles'){closePopover();closeModal();screen('profiles')}else if(btn.dataset.popAction==='home'){closePopover();setCategory('all')}});
$$('[data-action="landing"]').forEach(b=>b.onclick=()=>{closePopover();if(!$('#topic-overlay').hidden)closeTopic();closeModal();screen('landing')});$$('[data-action="intro"]').forEach(b=>b.onclick=()=>openPopover('DIE IDEE',`<p class="pop-note">Wie wird aus einem Sneaker ein Kauf? Unsere Experience erklärt Vertrieb und Customer Journey mit vier interaktiven Episoden.</p><button class="pop-row" data-pop-action="profiles">Jetzt Perspektive wählen <b>→</b></button>`));$$('[data-action="team"]').forEach(b=>b.onclick=showInfo);
$('#start-experience').onclick=()=>screen('profiles');$('#custom-name').value=userName;if(avatarData){$('#avatar-sample').innerHTML='<img src="'+avatarData+'" alt="Gespeicherter Profilbildausschnitt">';}$$('[data-profile]').forEach(b=>b.onclick=()=>{if(b.dataset.profile==='custom'){$('#profile-grid').hidden=true;$('#custom-panel').hidden=false;$('#custom-name').focus()}else enter(b.dataset.profile)});$('#custom-back').onclick=()=>{$('#custom-panel').hidden=true;$('#profile-grid').hidden=false};
$('#custom-file').onchange=async e=>{const f=e.target.files?.[0];if(!f)return;if(!/^image\/(jpeg|png|webp)$/.test(f.type)||f.size>5e6){toast('Nur JPG, PNG oder WebP unter 5 MB.');return}const url=URL.createObjectURL(f);try{const img=new Image();img.src=url;await img.decode();const cn=document.createElement('canvas');cn.width=cn.height=180;const ctx=cn.getContext('2d');let side=Math.min(img.width,img.height);ctx.drawImage(img,(img.width-side)/2,(img.height-side)/2,side,side,0,0,180,180);avatarData=cn.toDataURL('image/jpeg',.78);$('#avatar-sample').innerHTML='';const el=new Image();el.src=avatarData;el.alt='Ausgewähltes Bild';$('#avatar-sample').append(el)}catch{toast('Das Bild konnte nicht gelesen werden.')}finally{URL.revokeObjectURL(url)}};
$('#custom-go').onclick=()=>{userName=$('#custom-name').value.trim()||'Gast';storage.set('sv3-name',userName);enter('custom')};$('#custom-name').addEventListener('keydown',e=>{if(e.key==='Enter')$('#custom-go').click()});
$('#return-profiles').onclick=()=>screen('profiles');$$('[data-tab]').forEach(b=>b.onclick=()=>setCategory(b.dataset.tab));$('#hero-prev').onclick=()=>{heroIndex=(heroIndex+3)%4;hero()};$('#hero-next').onclick=()=>{heroIndex=(heroIndex+1)%4;hero()};$('#hero-start').onclick=openHero;$('#hero-details').onclick=openHero;$('#show-all').onclick=listPopover;$('#side-all').onclick=listPopover;$$('[data-feature]').forEach(b=>b.onclick=()=>openModal(b.dataset.feature));
$$('[data-go]').forEach(b=>b.onclick=()=>{const k=b.dataset.go;$$('[data-go]').forEach(x=>x.classList.toggle('active',x===b));if(k==='home')setCategory('all');else if(k==='play'){guided=true;guidedIndex=0;openModal('ep1',true)}else if(k==='store')openModal('ep2');else if(k==='stats')showStats();else if(k==='saved')showSaved();else if(k==='info')showInfo()});
$('#search-toggle').onclick=showSearch;$('#notification-toggle').onclick=showNotifications;$('#settings-toggle').onclick=showSettings;$('#profile-toggle').onclick=()=>openPopover('DEIN PROFIL',`<p class="pop-note">${persona==='custom'?'Deine persönliche Journey':persona==='retailer'?'Händlerperspektive':persona==='maker'?'Herstellerperspektive':'Sneakerhead-Perspektive'}</p><button class="pop-row" data-pop-action="profiles">Profil wechseln <b>→</b></button><button class="pop-row" data-pop-action="home">Streaming-Startseite <b>→</b></button>`);
$('#modal-close').onclick=closeModal;$('#modal-scrim').onclick=closeModal;$('#modal-previous').onclick=()=>{if(active){const idx=EP.findIndex(e=>e.id===active);if(idx>0){if(guided)guidedIndex=idx-1;openModal(EP[idx-1].id,guided)}}};$('#modal-done').onclick=completeCurrent;$('#save-episode').onclick=()=>{if(!active)return;if(saved.has(active)){saved.delete(active);toast('Aus der Merkliste entfernt')}else{saved.add(active);toast('In der Merkliste gespeichert')}storage.set('sv2-favs',[...saved]);$('#save-episode').innerHTML=saved.has(active)?'★ <span>Gespeichert</span>':'☆ <span>Merken</span>'};$('#popover-close').onclick=closePopover;
document.addEventListener('keydown',e=>{if(e.key==='ArrowRight'&&document.body.dataset.screen==='app'&&$('#modal').hidden&&$('#popover').hidden){heroIndex=(heroIndex+1)%4;hero()}if(e.key==='ArrowLeft'&&document.body.dataset.screen==='app'&&$('#modal').hidden&&$('#popover').hidden){heroIndex=(heroIndex+3)%4;hero()}});
const css=document.createElement('style');css.textContent='body.soft-scene .backdrop{filter:brightness(.52) saturate(.65) blur(3px)}';document.head.append(css);

/* Local round photo editor, ending and small hidden details. */
let cropImage=null,cropScale=1,cropX=0,cropY=0,cropPrev=null,cropObjectURL=null;
const cropCanvas=$('#crop-canvas'),cropCtx=cropCanvas.getContext('2d'),cropSize=cropCanvas.width;
function cropLimits(){if(!cropImage)return {maxX:0,maxY:0};const bw=cropImage.width*Math.max(cropSize/cropImage.width,cropSize/cropImage.height)*cropScale,bh=cropImage.height*Math.max(cropSize/cropImage.width,cropSize/cropImage.height)*cropScale;return {maxX:Math.max(0,(bw-cropSize)/2),maxY:Math.max(0,(bh-cropSize)/2)}}
function renderCrop(){if(!cropImage)return;const b=Math.max(cropSize/cropImage.width,cropSize/cropImage.height)*cropScale,w=cropImage.width*b,h=cropImage.height*b;const lim=cropLimits();cropX=Math.max(-lim.maxX,Math.min(lim.maxX,cropX));cropY=Math.max(-lim.maxY,Math.min(lim.maxY,cropY));cropCtx.clearRect(0,0,cropSize,cropSize);cropCtx.save();cropCtx.beginPath();cropCtx.arc(cropSize/2,cropSize/2,cropSize/2,0,Math.PI*2);cropCtx.clip();cropCtx.fillStyle='#1b1534';cropCtx.fillRect(0,0,cropSize,cropSize);cropCtx.imageSmoothingEnabled=true;cropCtx.imageSmoothingQuality='high';cropCtx.drawImage(cropImage,(cropSize-w)/2+cropX,(cropSize-h)/2+cropY,w,h);cropCtx.restore();$('#crop-zoom-label').textContent=Math.round(cropScale*100)+' %'}
async function loadCrop(file){if(!file)return;if(!/^image\/(jpeg|png|webp)$/.test(file.type)||file.size>5e6){toast('Bitte JPG, PNG oder WebP unter 5 MB wählen.');return}
 if(cropObjectURL)URL.revokeObjectURL(cropObjectURL);cropObjectURL=URL.createObjectURL(file);
 try{const im=new Image();im.src=cropObjectURL;await im.decode();cropImage=im;cropScale=1;cropX=cropY=0;$('#crop-zoom').value=100;$('#crop-overlay').hidden=false;renderCrop();$('#crop-save').focus()}catch{toast('Das Bild konnte nicht geöffnet werden.')}
}
$('#custom-file').onchange=e=>{const file=e.target.files?.[0];if(file)loadCrop(file)};
$('#avatar-sample').onclick=()=>{if(cropImage){$('#crop-overlay').hidden=false;renderCrop()}else $('#custom-file').click()};
$('#crop-zoom').oninput=e=>{cropScale=Number(e.target.value)/100;renderCrop()};
$('#crop-reset').onclick=()=>{cropScale=1;cropX=cropY=0;$('#crop-zoom').value=100;renderCrop()};
let cropDrag=null;
cropCanvas.addEventListener('pointerdown',e=>{if(!cropImage)return;cropDrag={x:e.clientX,y:e.clientY,ox:cropX,oy:cropY};cropCanvas.setPointerCapture(e.pointerId)});
cropCanvas.addEventListener('pointermove',e=>{if(!cropDrag)return;const scale=cropSize/cropCanvas.getBoundingClientRect().width;cropX=cropDrag.ox+(e.clientX-cropDrag.x)*scale;cropY=cropDrag.oy+(e.clientY-cropDrag.y)*scale;renderCrop()});
for(const eventName of ['pointerup','pointercancel','lostpointercapture'])cropCanvas.addEventListener(eventName,()=>cropDrag=null);
cropCanvas.addEventListener('wheel',e=>{if(!cropImage)return;e.preventDefault();cropScale=Math.min(3,Math.max(1,cropScale+(e.deltaY<0?.08:-.08)));$('#crop-zoom').value=Math.round(cropScale*100);renderCrop()},{passive:false});
function closeCrop(){$('#crop-overlay').hidden=true;cropDrag=null}
$('#crop-cancel').onclick=closeCrop;
$('#crop-save').onclick=()=>{if(!cropImage)return;const size=512, cn=document.createElement('canvas');cn.width=cn.height=size;const c=cn.getContext('2d');const scaleFactor=size/cropSize;const scale=Math.max(cropSize/cropImage.width,cropSize/cropImage.height)*cropScale*scaleFactor;const w=cropImage.width*scale,h=cropImage.height*scale;c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';c.fillStyle='#1b1534';c.fillRect(0,0,size,size);c.drawImage(cropImage,(size-w)/2+cropX*scaleFactor,(size-h)/2+cropY*scaleFactor,w,h);avatarData=cn.toDataURL('image/jpeg',.90);storage.set('sv3-avatar',avatarData);$('#avatar-sample').innerHTML='<img src="'+avatarData+'" alt="Aktueller Profilbildausschnitt">';if(persona==='custom')setCustomAvatar();closeCrop();toast('Dein Ausschnitt ist gespeichert und bleibt unverändert.')};
function setCustomAvatar(){if(!avatarData)return;const badge=$('#profile-toggle');badge.innerHTML='';const img=new Image();img.src=avatarData;img.alt='Dein gespeicherter Bildausschnitt';badge.append(img)}
function showFinale(){closePopover();$('#finale').hidden=false;document.body.style.overflow='hidden';$('#finale-restart').focus()}
function closeFinale(){ $('#finale').hidden=true;document.body.style.overflow='';}
$('#finale-explore').onclick=()=>{closeFinale();screen('app');setCategory('all')};
$('#finale-restart').onclick=()=>{closeFinale();guided=false;guidedIndex=0;completed.clear();storage.set('sv2-done',[]);updateProgress();screen('landing')};
$('#finale-profiles').onclick=()=>{closeFinale();guided=false;guidedIndex=0;screen('profiles')};
$('#production-credit').onclick=()=>toast('DEUTSCHE WEEKEND PRODUCTION ✦');
$('#george-mark').onclick=()=>toast('George war hier ✳');
const originalSavedButton=$('[data-go="saved"]');
originalSavedButton.addEventListener('click',()=>toast('Soso <3 Spongebob 💜')); 
$('#popover-body').addEventListener('click',e=>{if(e.target.closest('[data-egg="monsters"]'))toast('Frankenstein und Dracula :)')});
// A visible option to redo the complete experience once finished, without locking chapters.
const _showSettings=showSettings;
$('#settings-toggle').onclick=()=>{_showSettings();const el=$('#popover-body');const b=document.createElement('button');b.className='pop-row';b.id='restart-progress';b.innerHTML='Vier-Kapitel-Fortschritt zurücksetzen <b>↻</b>';b.onclick=()=>{completed.clear();storage.set('sv2-done',[]);storage.set('sv3-finale-seen',false);updateProgress();closePopover();toast('Fortschritt zurückgesetzt · Alle Kapitel sind weiterhin frei zugänglich.')};el.append(b);const replay=document.createElement('button');replay.className='pop-row';replay.textContent='Matrix-Finale noch einmal ansehen ↗';replay.onclick=()=>{closePopover();startMatrix(true)};el.append(replay)};
// Unified global ESC navigation is installed after all layers have initialized.

/* A ten-second full-screen sequence; thank-you lives inside the Matrix. */
let matrixFrame=0,matrixTimers=[],matrixDone=null,matrixRunning=false,matrixCols=[],matrixLast=0;
const matrixElement=$('#matrix-transition'),matrixCanvas=$('#matrix-canvas'),mctx=matrixCanvas.getContext('2d',{alpha:false});
const matrixLetters='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%<>+-';
const matrixLater=(fn,ms)=>{const id=window.setTimeout(fn,ms);matrixTimers.push(id);return id};
function matrixResize(){const dpi=Math.min(window.devicePixelRatio||1,2),w=window.innerWidth,h=window.innerHeight;matrixCanvas.width=Math.round(w*dpi);matrixCanvas.height=Math.round(h*dpi);matrixCanvas.style.width=w+'px';matrixCanvas.style.height=h+'px';mctx.setTransform(dpi,0,0,dpi,0,0);const count=Math.ceil(w/19);matrixCols=Array.from({length:count},(_,i)=>({x:i*19,strands:Array.from({length:4},()=>({y:Math.random()*h,speed:2.5+Math.random()*5.5}))}));return {w,h}}
function endMatrix(toFinale=matrixDone){if(!matrixRunning)return;matrixRunning=false;cancelAnimationFrame(matrixFrame);matrixTimers.forEach(clearTimeout);matrixTimers=[];matrixDone=null;
 matrixElement.classList.add('fade-out');
 if(toFinale)showFinale();
 window.setTimeout(()=>{matrixElement.hidden=true;matrixElement.classList.remove('fade-out','show-thanks','final-glitch','blackout');document.body.classList.remove('matrix-active')},480)
}
function drawMatrix(time){if(!matrixRunning)return;const w=window.innerWidth,h=window.innerHeight;const dt=Math.max(.25,Math.min((time-(matrixLast||time))/16.67,2));matrixLast=time;mctx.fillStyle='rgba(4,2,14,0.29)';mctx.fillRect(0,0,w,h);mctx.font='bold 18px ui-monospace,Consolas,monospace';mctx.textAlign='center';
 for(let i=0;i<matrixCols.length;i++){
  const col=matrixCols[i];
  for(const strand of col.strands){
   strand.y+=strand.speed*dt;
   for(let j=0;j<12;j++){
    const y=(strand.y-j*18+h*1.5)%(h+220)-110;
    if(y<0||y>h+14)continue;
    mctx.fillStyle=j===0?'#fbe3ff':(j<3?'rgba(207,151,255,.96)':'rgba(126,70,220,'+Math.max(.12,.62-j*.045)+')');
    mctx.shadowColor='#c15aff';mctx.shadowBlur=j===0?4:0;
    mctx.fillText(matrixLetters[(Math.floor(time/90)+i*7+j*11)%matrixLetters.length],col.x,y);
   }
   if(strand.y>h*1.7)strand.y=-Math.random()*h*.4;
  }
 }
 mctx.shadowBlur=0;matrixFrame=requestAnimationFrame(drawMatrix)
}
function startMatrix(toFinale=true){if(matrixRunning)return;closePopover();if(!$('#topic-overlay').hidden)closeTopic();if(!$('#modal').hidden)closeModal();
 matrixDone=toFinale;matrixRunning=true;matrixElement.hidden=false;matrixElement.classList.remove('fade-out','show-thanks','final-glitch','blackout');document.body.classList.add('matrix-active');
 matrixResize();matrixLast=0;mctx.fillStyle='#05020e';mctx.fillRect(0,0,window.innerWidth,window.innerHeight);
 const calm=reduced||window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(!calm)matrixFrame=requestAnimationFrame(drawMatrix);
 matrixLater(()=>matrixElement.classList.add('show-thanks'),calm?1100:2900);
 if(!calm){
   matrixLater(()=>matrixElement.classList.add('final-glitch'),9650);
   matrixLater(()=>matrixElement.classList.add('blackout'),10000);
   matrixLater(()=>endMatrix(),10380);
 }else matrixLater(()=>endMatrix(),5500);
}
$('#matrix-skip').onclick=()=>endMatrix();
window.addEventListener('resize',()=>{if(matrixRunning)matrixResize()});
let konami=[];const secret=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
document.addEventListener('keydown',event=>{if(matrixRunning){if(event.key==='Escape')endMatrix();return}if(['INPUT','TEXTAREA'].includes(document.activeElement?.tagName))return;konami.push(event.key);konami=konami.slice(-10);if(konami.join('|')===secret.join('|')){konami=[];startMatrix(false);toast('SECRET GLITCH UNLOCKED')}});

document.addEventListener('keydown',e=>{
 if(e.key!=='Escape')return;
 e.preventDefault();e.stopImmediatePropagation();
 if(matrixRunning){endMatrix(false);return}
 if(!$('#crop-overlay').hidden){closeCrop();return}
 if(!$('#topic-overlay').hidden){closeTopic();return}
 if(!$('#popover').hidden){closePopover();return}
 if(!$('#modal').hidden){guided=false;guidedIndex=0;closeModal();return}
 if(!$('#finale').hidden){closeFinale();screen('app');return}
 if(!$('#custom-panel').hidden){$('#custom-back').click();return}
 if(document.body.dataset.screen==='app'){guided=false;guidedIndex=0;screen('profiles');return}
 if(document.body.dataset.screen==='profiles'){screen('landing');return}
 // Landing page: already at the first screen; no history layer left.
},true);
setCategory('all');updateProgress();screen('landing');

})();
