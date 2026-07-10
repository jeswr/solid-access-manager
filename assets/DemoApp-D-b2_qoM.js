import{r as P,j as u,T as j,S as L,a as N}from"./index-CU1AECRy.js";class B extends Error{constructor(){super("Demo mode — sample data only; changes are disabled."),this.name="DemoReadOnlyError"}}function H(e,n){const d=new Set;for(const t of n.keys()){if(!t.startsWith(e)||t===e)continue;const m=t.slice(e.length);if(m.length===0)continue;const h=m.indexOf("/");h===-1?d.add(t):d.add(e+m.slice(0,h+1))}const A=[...d].map(t=>`<${e}> <http://www.w3.org/ns/ldp#contains> <${t}> .`);return A.push(`<${e}> a <http://www.w3.org/ns/ldp#BasicContainer>, <http://www.w3.org/ns/ldp#Container> .`),`${A.join(`
`)}
`}function M(e){const n=new Map(Object.entries(e)),d=[];return{fetch:(async(t,m)=>{const h=typeof t=="string"?t:t instanceof URL?t.href:t.url,i=h.split("#")[0]??h,f=(m?.method??(t instanceof Request?t.method:"GET")).toUpperCase();if(d.push({method:f,url:i}),f!=="GET"&&f!=="HEAD")throw new B;const C=T=>{const b={};return T&&(b.etag='"demo"',b["content-type"]="text/turtle"),i.endsWith(".acl")||(b.link=`<${i}.acl>; rel="acl"`),b},y=n.get(i);if(y!==void 0)return new Response(f==="HEAD"?null:y,{status:200,headers:C(!0)});if(i.endsWith("/")){const T=H(i,n);if(T.includes("ldp#contains"))return new Response(f==="HEAD"?null:T,{status:200,headers:C(!0)})}return new Response("not found",{status:404,headers:C(!1)})}),body:t=>n.get(t),log:d}}const a="https://ada.example/",s="https://ada.example/profile/card#me",g="https://bex.example/profile/card#me",w="https://clinic.example/id#app",E="https://vocab.example/health#Health",I="https://vocab.example/purpose#CareCoordination",_=`${a}inbox/`,O=`${_}request-clinic.ttl`,p=`${a}access-manager/grants/`,v=`${a}access-manager/receipts/`,o=`${a}health/`,$=`${o}results/blood.ttl`,x=`${o}results/panel.ttl`,D=`${o}notes.ttl`,S=`${o}diary.ttl`,c="4c1f9a2e77d3",l="5d0a3c9b1e88",r=`
@prefix acl: <http://www.w3.org/ns/auth/acl#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix ldp: <http://www.w3.org/ns/ldp#> .
@prefix solid: <http://www.w3.org/ns/solid/terms#> .
@prefix pim: <http://www.w3.org/ns/pim/space#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix dct: <http://purl.org/dc/terms/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix dpv: <https://w3id.org/dpv#> .
@prefix accm: <https://w3id.org/jeswr/accm#> .
`;function G(){return`${r}
<${s}> a foaf:Person ;
  foaf:name "Ada" ;
  pim:storage <${a}> ;
  ldp:inbox <${_}> ;
  solid:publicTypeIndex <${a}settings/publicTypeIndex.ttl> .
`}function W(){return`${r}
<${g}> a foaf:Person ;
  foaf:name "Dr. Bex" .
`}function Z(){return`${r}
<${w}> foaf:name "Clinic App" .
`}function k(){return`${r}
<${a}.acl#owner> a acl:Authorization ;
  acl:agent <${s}> ;
  acl:accessTo <${a}> ;
  acl:default <${a}> ;
  acl:mode acl:Read, acl:Write, acl:Control .
`}function q(){return`${r}
<${o}.acl#owner> a acl:Authorization ;
  acl:agent <${s}> ;
  acl:accessTo <${o}> ;
  acl:default <${o}> ;
  acl:mode acl:Read, acl:Write, acl:Control .
<${o}.acl#bex> a acl:Authorization ;
  acl:agent <${g}> ;
  acl:accessTo <${o}> ;
  acl:default <${o}> ;
  acl:mode acl:Read .
`}function z(){const e=`${a}profile/card`;return`${r}
<${e}.acl#owner> a acl:Authorization ;
  acl:agent <${s}> ;
  acl:accessTo <${e}> ;
  acl:mode acl:Read, acl:Write, acl:Control .
<${e}.acl#public> a acl:Authorization ;
  acl:agentClass foaf:Agent ;
  acl:accessTo <${e}> ;
  acl:mode acl:Read .
`}function F(){return`${r}
<${a}settings/publicTypeIndex.ttl#health> a solid:TypeRegistration ;
  rdfs:label "Health" ;
  solid:forClass <${E}> ;
  solid:instance <${$}>, <${x}>, <${D}> .
`}function X(){return`${r}
<${O}> a odrl:Offer ;
  odrl:uid <${O}> ;
  accm:dataClass <${E}> ;
  odrl:permission [
    odrl:assignee <${w}> ;
    odrl:action odrl:read ;
    odrl:target <${E}> ;
    odrl:constraint [
      odrl:leftOperand odrl:purpose ;
      odrl:operator odrl:eq ;
      odrl:rightOperand <${I}>
    ] , [
      odrl:leftOperand odrl:dateTime ;
      odrl:operator odrl:lteq ;
      odrl:rightOperand "2026-08-09T00:00:00Z"^^xsd:dateTime
    ]
  ] .
`}function U(){const e=`${p}grant-${c}.ttl`;return`${r}
<${e}> a odrl:Agreement ;
  odrl:uid <${e}> ;
  odrl:permission [
    odrl:assigner <${s}> ;
    odrl:assignee <${g}> ;
    odrl:action odrl:read ;
    odrl:target <${o}>
  ] ;
  accm:grantId "${c}" ;
  accm:schemaVersion "1" ;
  accm:agent <${g}> ;
  accm:resolvesTo <${o}> ;
  accm:mode acl:Read ;
  dct:created "2026-06-12T09:30:00Z"^^xsd:dateTime .
`}function V(){const e=`${p}grant-${l}.ttl`;return`${r}
<${e}> a odrl:Agreement ;
  odrl:uid <${e}> ;
  odrl:permission [
    odrl:assigner <${s}> ;
    odrl:assignee <${w}> ;
    odrl:action odrl:read ;
    odrl:target <${$}> ;
    odrl:constraint [
      odrl:leftOperand odrl:purpose ;
      odrl:operator odrl:eq ;
      odrl:rightOperand <${I}>
    ] , [
      odrl:leftOperand odrl:dateTime ;
      odrl:operator odrl:lteq ;
      odrl:rightOperand "2026-05-14T00:00:00Z"^^xsd:dateTime
    ]
  ] ;
  accm:grantId "${l}" ;
  accm:schemaVersion "1" ;
  accm:agent <${w}> ;
  accm:resolvesTo <${$}>, <${x}> ;
  accm:mode acl:Read ;
  dct:created "2026-04-14T10:15:00Z"^^xsd:dateTime ;
  accm:revokedAt "2026-05-02T08:45:00Z"^^xsd:dateTime .
`}function Y(){const e=`${v}receipt-${c}.ttl`;return`${r}
<${e}> a dpv:ConsentRecord ;
  dpv:hasDataSubject <${s}> ;
  dpv:hasRecipient <${g}> ;
  dpv:hasConsentStatus dpv:ConsentGiven ;
  dpv:hasLegalBasis dpv:Consent ;
  accm:grantId "${c}" ;
  accm:grantRef <${p}grant-${c}.ttl> ;
  accm:resolvesTo <${o}> ;
  dct:created "2026-06-12T09:30:00Z"^^xsd:dateTime .
`}function K(){const e=`${v}receipt-${l}.ttl`;return`${r}
<${e}> a dpv:ConsentRecord ;
  dpv:hasDataSubject <${s}> ;
  dpv:hasRecipient <${w}> ;
  dpv:hasPurpose <${I}> ;
  dpv:hasConsentStatus dpv:ConsentWithdrawn ;
  dpv:hasLegalBasis dpv:Consent ;
  accm:grantId "${l}" ;
  accm:grantRef <${p}grant-${l}.ttl> ;
  accm:resolvesTo <${$}>, <${x}> ;
  dct:created "2026-04-14T10:15:00Z"^^xsd:dateTime ;
  accm:revokedAt "2026-05-02T08:45:00Z"^^xsd:dateTime .
`}function R(e,n){return`${r}<${e}> dct:title "${n}" .`}function Q(){return{[`${a}profile/card`]:G(),[`${a}profile/card.acl`]:z(),[`${a}.acl`]:k(),[`${o}.acl`]:q(),[$]:R($,"Blood test results"),[x]:R(x,"Metabolic panel results"),[D]:R(D,"Care notes"),[S]:R(S,"Symptom diary"),[`${a}settings/publicTypeIndex.ttl`]:F(),[O]:X(),[`${p}grant-${c}.ttl`]:U(),[`${p}grant-${l}.ttl`]:V(),[`${v}receipt-${c}.ttl`]:Y(),[`${v}receipt-${l}.ttl`]:K(),"https://bex.example/profile/card":W(),"https://clinic.example/id":Z()}}function J(){const e=M(Q());return{session:{webId:s,fetch:e.fetch},pod:e}}const ee={dashboard:"dashboard",inbox:"inbox",history:"history",dataclass:"classes"};function ae({view:e}){const n=P.useMemo(()=>J().session,[]);return u.jsxs(j,{children:[u.jsxs("div",{className:"demo-banner",role:"note","data-testid":"demo-banner",children:[u.jsx("strong",{children:"Demo"})," — sample data (not a real pod). You are browsing Ada’s simulated pod; changes are disabled."]}),u.jsx(L,{session:n,children:u.jsx(N,{webId:n.webId,onSignOut:()=>{},initialTab:ee[e]})})]})}export{ae as DemoApp};
