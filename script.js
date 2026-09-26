/**
 * @license
 * SARVA SAMRUDDHI INDEPENDENT PARTY (సర్వ సమృద్ధి ఇండిపెండెంట్ పార్టీ)
 * Official Institutional Client Script
 * Location: Deverakonda Constituency, Nalgonda District, Telangana, India
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. STRUCTURED CONTENT ARCHITECTURE
     ========================================================================== */

  const partyInfo = {
    nameEnglish: "Sarva Samrudhhi Independent Party",
    nameTelugu: "సర్వ సమృద్ధి ఇండిపెండెంట్ పార్టీ",
    taglineEnglish: "Universal Prosperity • Democratic Participation • Local Empowerment",
    taglineTelugu: "సమష్టి సమృద్ధి • ప్రజాస్వామ్య భాగస్వామ్యం • స్థానిక సాధికారత",
    constituency: "Deverakonda (ST Reserved)",
    district: "Nalgonda District",
    state: "Telangana",
    country: "India",
    centralOffice: "Party Secretariat, Main Road, Deverakonda Town, Nalgonda District, Telangana - 508248",
    phone: "+91 94940 00000 / 08691-200000 (Official Helpline Placeholder)",
    email: "contact@sarvasamrudhhi.org (Official Secretariat Desk)",
    officeHours: "Monday – Saturday: 09:30 AM – 06:30 PM IST",
    status: "Newly Established Independent Political Platform"
  };

  /* Complete Bilingual Dictionary */
  const translations = {
    en: {
      site_title: "Sarva Samrudhhi Independent Party | Deverakonda, Telangana",
      brand_sub: "Deverakonda • Nalgonda • Telangana",
      nav_home: "Home",
      nav_about: "About",
      nav_why: "Why Us",
      nav_vision: "Vision",
      nav_objectives: "Objectives",
      nav_constituency: "Constituency",
      nav_structure: "Structure",
      nav_leadership: "Leadership",
      nav_updates: "Updates",
      nav_gallery: "Gallery",
      nav_how_we_work: "How We Work",
      nav_involve: "Get Involved",
      nav_contact: "Contact",
      btn_explore_vision: "Explore Our Vision",
      btn_about_party: "About the Party",
      btn_get_involved: "Get Involved",
      btn_learn_more: "Focus Areas",
      btn_close: "Close",
      btn_previous: "Previous",
      btn_next: "Next",

      /* Hero Section */
      hero_badge_kicker: "Official Institutional Information Portal",
      hero_title_en: "SARVA SAMRUDDHI INDEPENDENT PARTY",
      hero_title_te: "సర్వ సమృద్ధి ఇండిపెండెంట్ పార్టీ",
      hero_location: "Deverakonda Constituency, Nalgonda District, Telangana",
      hero_description: "An independent grassroots political platform dedicated to transparent democratic representation, sustainable local agriculture, quality public education, and universal prosperity for all citizens of Deverakonda.",
      hero_stat_independent: "Independent Platform",
      hero_stat_grassroots: "Community-Led Action",
      hero_stat_deverakonda: "Deverakonda Focused",
      hero_poster_badge_title: "Official Emblem",
      hero_poster_badge_sub: "Tree of Collective Prosperity",

      /* Why Party Exists */
      why_kicker: "Organizational Foundation",
      why_title: "Why Sarva Samrudhhi?",
      why_title_te: "సర్వ సమృద్ధి ఎందుకు?",
      why_lead_title: "A Platform Built Upon Grassroots Dignity and Accountability",
      why_lead_text: "Sarva Samrudhhi Independent Party was established to provide the citizens of Deverakonda Constituency with an uncompromised, people-centric political choice. The name 'Sarva Samrudhhi' embodies our core belief: that development must be holistic, reaching every farmer, family, student, and worker in our villages and towns without bias or neglect.",
      why_callout_title: "Our Stated Commitment:",
      why_callout_desc: "Direct constituent participation in policy decisions, transparent allocation of community resources, and vigilant defense of local civic interests.",
      flow_1_title: "Community",
      flow_1_desc: "Listening directly to the lived concerns of every village and ward.",
      flow_2_title: "Local Needs",
      flow_2_desc: "Identifying concrete infrastructure, irrigation, and healthcare gaps.",
      flow_3_title: "Public Participation",
      flow_3_desc: "Democratic consultation rather than top-down political decrees.",
      flow_4_title: "Stated Objectives",
      flow_4_desc: "Clear, verifiable developmental priorities prioritized by citizens.",
      flow_5_title: "Universal Prosperity",
      flow_5_desc: "Holistic socio-economic progress across all mandals of Deverakonda.",

      /* Vision Section */
      vision_kicker: "Guiding Philosophy",
      vision_title: "OUR VISION",
      vision_title_te: "మా దృష్టికోణం",
      vision_subtitle: "The Tree of Collective Prosperity represents our living organizational framework, rooted in integrity and branching out into tangible public welfare.",
      tree_tab_roots: "Roots (Values)",
      tree_tab_roots_sub: "Constitutional Integrity",
      tree_tab_trunk: "Trunk (Organization)",
      tree_tab_trunk_sub: "Democratic Framework",
      tree_tab_branches: "Branches (Priorities)",
      tree_tab_branches_sub: "Strategic Objectives",
      tree_tab_leaves: "Leaves (Community)",
      tree_tab_leaves_sub: "Prosperous Citizens",

      /* Objectives Section */
      obj_kicker: "Core Policy Pillars",
      obj_title: "Stated Objectives & Development Priorities",
      obj_subtitle: "The party works systematically across verified socio-economic focus areas essential for the sustained prosperity of Deverakonda.",
      obj_1_title: "Agriculture & Water Security",
      obj_1_desc: "Strengthening local canal irrigation, ensuring reliable power supply, seed security, and fair market procurement for small and tenant farmers.",
      obj_2_title: "Roads & Rural Infrastructure",
      obj_2_desc: "Connecting interior hamlets and thandas to primary mandal roads, improving bridges, drainage, and reliable public transit.",
      obj_3_title: "Quality Public Healthcare",
      obj_3_desc: "Modernizing primary health centres (PHCs), round-the-clock emergency medical transit, and accessible specialty care in Deverakonda.",
      obj_4_title: "Education & Youth Skills",
      obj_4_desc: "Upgrading government schools, digital literacy laboratories, residential hostel amenities, and career skill training for local youth.",
      obj_5_title: "Livelihood & Employment",
      obj_5_desc: "Promoting local agro-processing hubs, cottage industries, vocational training, and transparent employment guidance for jobseekers.",
      obj_6_title: "Women & Family Welfare",
      obj_6_desc: "Supporting self-help groups (SHGs), maternity health infrastructure, women safety patrols, and nutritional support programs.",
      obj_7_title: "Safe Drinking Water",
      obj_7_desc: "Ensuring clean, fluoride-safe drinking water supply to every household and rejuvenating traditional village percolation tanks.",
      obj_8_title: "Transparent Public Governance",
      obj_8_desc: "Regular open public grievance assemblies (Grama Vedikas), ward-level participatory budgeting, and anti-corruption oversight.",

      /* Constituency Section */
      constituency_kicker: "Local Geography & Representation",
      constituency_title: "OUR CONSTITUENCY",
      constituency_title_te: "మా నియోజకవర్గం",
      constituency_subtitle: "Deverakonda Constituency spans diverse agricultural heartlands, historic heritage, and resilient communities across Nalgonda District.",
      constituency_tag: "Deverakonda Assembly Constituency (ST)",
      constituency_district: "Nalgonda District, Telangana",
      constituency_state: "State of Telangana, India",

      /* Leadership Section */
      leadership_kicker: "Party Stewardship",
      leadership_title: "Leadership & Administration",
      leadership_subtitle: "Governed by committed community organizers, legal advisors, and grassroots advocates dedicated to transparent civic leadership.",
      lead_notice: "Leadership panel nominations and executive constituent committee appointments are actively being ratified by the party secretariat.",

      /* Party Structure */
      structure_kicker: "Democratic Framework",
      structure_title: "Party Organization Structure",
      structure_subtitle: "A transparent, non-hierarchical participatory model that empowers village representatives to shape party policy.",
      struct_1_title: "Party Convention & Central Council",
      struct_1_role: "Constitutional Guidance & Policy Ratification",
      struct_2_title: "Constituency Executive Council",
      struct_2_role: "Deverakonda Central Coordination & Strategy",
      struct_3a_title: "Mandal Coordination Committees",
      struct_3a_role: "7 Mandal Working Panels & Community Liaisons",
      struct_3b_title: "Village & Ward Action Circles",
      struct_3b_role: "Grassroots Booth Teams & Resident Delegates",
      struct_3c_title: "Civic Advisory & Specialized Wings",
      struct_3c_role: "Farmer, Youth, Women & Legal Advisory Councils",

      /* How We Work */
      work_kicker: "Institutional Methodology",
      work_title: "How We Work",
      work_subtitle: "A disciplined, step-by-step participatory process that ensures every community voice translates into accountable public action.",
      step_1_title: "01. Listen",
      step_1_desc: "Conducting continuous village listening tours to understand unaddressed local grievances.",
      step_2_title: "02. Understand",
      step_2_desc: "Reviewing technical data, revenue records, and administrative bottlenecks with local residents.",
      step_3_title: "03. Discuss",
      step_3_desc: "Convening open community consultations to debate viable solutions democratically.",
      step_4_title: "04. Organize",
      step_4_desc: "Forming transparent task teams composed of local elders, youth, and subject professionals.",
      step_5_title: "05. Act",
      step_5_desc: "Constructive administrative representations, legal petitions, and public advocacy.",
      step_6_title: "06. Report",
      step_6_desc: "Publishing periodic public scorecards on action taken and progress achieved.",

      /* Updates Section */
      updates_kicker: "Official Information Feed",
      updates_title: "Latest Updates & Announcements",
      updates_subtitle: "Official communiqués, public event notices, and constituent development circulars.",
      filter_all: "All Updates",
      filter_announcements: "Announcements",
      filter_events: "Events & Meetings",
      filter_activities: "Field Activities",
      btn_read_update: "Read Circular",

      /* Gallery Section */
      gallery_kicker: "Visual Archive",
      gallery_title: "Official Media & Field Gallery",
      gallery_subtitle: "Documenting community assemblies, regional landscapes, and official party identity assets.",

      /* Get Involved Section */
      involve_kicker: "Citizen Participation",
      involve_title: "Get Involved with Sarva Samrudhhi",
      involve_subtitle: "Democratic change is built by active citizens. Join our constituent movement in whatever capacity fits your skills and time.",
      involve_intro_title: "Be a Part of Deverakonda's Transformation",
      involve_intro_desc: "Whether you wish to volunteer in your village, offer policy expertise, report a pressing community issue, or attend our open meetings, your participation is welcomed.",
      opt_volunteer: "Volunteer in Your Mandal",
      opt_volunteer_desc: "Join village-level civic outreach, event organization, and voter awareness.",
      opt_suggestion: "Submit a Local Issue",
      opt_suggestion_desc: "Report neglected roads, irrigation shortages, or public facility issues.",
      opt_meeting: "Attend Public Assemblies",
      opt_meeting_desc: "Participate in forthcoming Grama Vedikas and open constituent dialogues.",
      opt_contact: "Contact Party Secretariat",
      opt_contact_desc: "Direct communication with the executive desk for formal inquiries.",

      /* Form Labels */
      form_name: "Full Name *",
      form_phone: "Mobile Phone Number *",
      form_email: "Email Address (Optional)",
      form_mandal: "Select Mandal / Locality *",
      form_category: "Participation Type *",
      form_message: "Your Message / Details of Local Need *",
      form_consent: "I confirm that the information provided is accurate and consent to receive official communications from Sarva Samrudhhi Independent Party. (Data is strictly protected).",
      form_submit_btn: "Submit Participation Request",
      form_submitting: "Processing...",
      form_success_msg: "Thank you! Your participation request has been registered with reference ID: SSIP-",
      form_error_msg: "Please complete all mandatory fields correctly.",

      /* Contact Section */
      contact_kicker: "Connect With Us",
      contact_title: "Official Party Secretariat",
      contact_subtitle: "Reach our central administrative office or contact our mandal community coordinators.",
      contact_address_label: "Party Central Office",
      contact_phone_label: "Helpline & Inquiries",
      contact_email_label: "Official Correspondence",
      contact_hours_label: "Working Hours",
      contact_directions_btn: "Get Office Directions",

      /* Footer */
      footer_disclaimer_title: "Official Information Notice",
      footer_disclaimer_text: "Sarva Samrudhhi Independent Party is a registered/constituted political organization operating in Deverakonda Constituency, Nalgonda District, Telangana. This portal serves as the authoritative source for party circulars, stated objectives, and civic consultation programs. No unauthorized third-party fundraising or unofficial political claims are endorsed.",
      footer_rights: "All Rights Reserved. Official Portal of Sarva Samrudhhi Independent Party.",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms of Use",
      footer_accessibility: "Accessibility Statement"
    },

    te: {
      site_title: "సర్వ సమృద్ధి ఇండిపెండెంట్ పార్టీ | దేవరకొండ, తెలంగాణ",
      brand_sub: "దేవరకొండ • నల్గొండ • తెలంగాణ",
      nav_home: "ప్రారంభం",
      nav_about: "పార్టీ గురించి",
      nav_why: "ఎందుకు?",
      nav_vision: "దృష్టికోణం",
      nav_objectives: "లక్ష్యాలు",
      nav_constituency: "నియోజకవర్గం",
      nav_structure: "వ్యవస్థ",
      nav_leadership: "నాయకత్వం",
      nav_updates: "సమాచారం",
      nav_gallery: "గ్యాలరీ",
      nav_how_we_work: "కార్యవిధానం",
      nav_involve: "పాల్గొనండి",
      nav_contact: "సంప్రదించండి",
      btn_explore_vision: "మా దృష్టికోణం చూడండి",
      btn_about_party: "పార్టీ గురించి",
      btn_get_involved: "మద్దతు ఇవ్వండి",
      btn_learn_more: "పూర్తి వివరాలు",
      btn_close: "మూసివేయి",
      btn_previous: "మునుపటిది",
      btn_next: "తదుపరిది",

      /* Hero Section */
      hero_badge_kicker: "అధికారిక సంస్థాగత సమాచార వేదిక",
      hero_title_en: "SARVA SAMRUDDHI INDEPENDENT PARTY",
      hero_title_te: "సర్వ సమృద్ధి ఇండిపెండెంట్ పార్టీ",
      hero_location: "దేవరకొండ నియోజకవర్గం, నల్గొండ జిల్లా, తెలంగాణ",
      hero_description: "పారదర్శక ప్రజాస్వామ్య ప్రాతినిధ్యం, స్థిరమైన స్థానిక వ్యవసాయం, నాణ్యమైన ప్రజా విద్య మరియు దేవరకొండ ప్రజలందరి సమగ్ర సమృద్ధి కోసం అంకితమైన స్వతంత్ర ప్రజా వేదిక.",
      hero_stat_independent: "స్వతంత్ర వేదిక",
      hero_stat_grassroots: "ప్రజా భాగస్వామ్యం",
      hero_stat_deverakonda: "దేవరకొండ కేంద్రం",
      hero_poster_badge_title: "అధికారిక చిహ్నం",
      hero_poster_badge_sub: "సామూహిక సమృద్ధి వృక్షం",

      /* Why Party Exists */
      why_kicker: "సంస్థాగత పునాది",
      why_title: "సర్వ సమృద్ధి ఎందుకు?",
      why_title_te: "సర్వ సమృద్ధి ఎందుకు?",
      why_lead_title: "ప్రజా గౌరవం మరియు జవాబుదారీతనంపై నిర్మించబడిన ప్రజా వేదిక",
      why_lead_text: "దేవరకొండ నియోజకవర్గ ప్రజలకు ఎటువంటి ఒత్తిడులకు లొంగని, నిజమైన ప్రజా అనుకూల రాజకీయ ప్రత్యామ్నాయాన్ని అందించడానికి 'సర్వ సమృద్ధి ఇండిపెండెంట్ పార్టీ' స్థాపించబడింది. 'సర్వ సమృద్ధి' అనే పేరు మన ప్రాథమిక విశ్వాసాన్ని ప్రతిబింబిస్తుంది: అభివృద్ధి అనేది సమగ్రంగా ఉండాలి; ప్రతి రైతు, కుటుంబం, విద్యార్థి మరియు శ్రామికుడికి ఎలాంటి వివక్ష లేకుండా చేరాలి.",
      why_callout_title: "మా అధికారిక సంకల్పం:",
      why_callout_desc: "నిర్ణయాలలో ప్రత్యక్ష ప్రజా భాగస్వామ్యం, ప్రజా వనరుల పారదర్శక వినియోగం మరియు స్థానిక సమస్యల పరిష్కారంలో నిరంతర పోరాటం.",
      flow_1_title: "సమాజం",
      flow_1_desc: "ప్రతి గ్రామం మరియు గూడెం ప్రజల సమస్యలను స్వయంగా వినడం.",
      flow_2_title: "స్థానిక అవసరాలు",
      flow_2_desc: "మౌలిక వసతులు, సాగునీరు మరియు వైద్య రంగాల లోపాలను గుర్తించడం.",
      flow_3_title: "ప్రజా భాగస్వామ్యం",
      flow_3_desc: "పైనుంచి రుద్దే విధానాలు కాకుండా ప్రజల ఆమోదంతో ముందుకు వెళ్లడం.",
      flow_4_title: "స్పష్టమైన లక్ష్యాలు",
      flow_4_desc: "ప్రజల ప్రాధాన్యతల ప్రకారం ధృవీకరించబడిన అభివృద్ధి ప్రణాళికలు.",
      flow_5_title: "సర్వ సమృద్ధి",
      flow_5_desc: "దేవరకొండలోని అన్ని మండలాల సమగ్ర, స్థిరమైన సామాజిక-ఆర్థిక ప్రగతి.",

      /* Vision Section */
      vision_kicker: "మా మార్గదర్శక సిద్ధాంతం",
      vision_title: "OUR VISION",
      vision_title_te: "మా దృష్టికోణం",
      vision_subtitle: "సామూహిక సమృద్ధి వృక్షం మన సమగ్ర సంస్థాగత నిర్మాణాన్ని ప్రతిబింబిస్తుంది; విలువలే పునాదిగా, ప్రజా సంక్షేమమే లక్ష్యంగా సాగుతుంది.",
      tree_tab_roots: "వేర్లు (విలువలు)",
      tree_tab_roots_sub: "రాజ్యాంగ నిబద్ధత & నిజాయితీ",
      tree_tab_trunk: "కాండం (వ్యవస్థ)",
      tree_tab_trunk_sub: "ప్రజాస్వామ్య నిర్మాణం",
      tree_tab_branches: "శాఖలు (లక్ష్యాలు)",
      tree_tab_branches_sub: "అభివృద్ధి ప్రాధాన్యతలు",
      tree_tab_leaves: "ఆకులు (సమాజం)",
      tree_tab_leaves_sub: "సుసంపన్న ప్రజలు",

      /* Objectives Section */
      obj_kicker: "ప్రధాన విధాన స్తంభాలు",
      obj_title: "నిర్ణీత లక్ష్యాలు & అభివృద్ధి ప్రాధాన్యతలు",
      obj_subtitle: "దేవరకొండ నియోజకవర్గ దీర్ఘకాలిక శ్రేయస్సు కోసం నిర్దిష్ట సామాజిక-ఆర్థిక రంగాలలో పార్టీ క్రమబద్ధంగా పనిచేస్తుంది.",
      obj_1_title: "వ్యవసాయం & సాగునీటి భద్రత",
      obj_1_desc: "కాలువల మరమ్మతులు, నమ్మకమైన విద్యుత్ సరఫరా, మేలైన విత్తనాలు మరియు చిన్న, కౌలు రైతులకు గిట్టుబాటు ధరల కల్పన.",
      obj_2_title: "రహదారులు & గ్రామీణ మౌలిక వసతులు",
      obj_2_desc: "మారుమూల గ్రామాలు మరియు తండాలకు మండల కేంద్రాలతో అనుసంధానం, నాణ్యమైన రోడ్లు, డ్రైనేజీ మరియు రవాణా సౌకర్యాలు.",
      obj_3_title: "నాణ్యమైన ప్రభుత్వ వైద్యం",
      obj_3_desc: "ప్రాథమిక ఆరోగ్య కేంద్రాల (PHC) ఆధునీకరణ, 24 గంటల అత్యవసర అంబులెన్స్ సేవలు మరియు నియోజకవర్గంలో సూపర్ స్పెషాలిటీ చికిత్సలు.",
      obj_4_title: "విద్య & యువత నైపుణ్యాభివృద్ధి",
      obj_4_desc: "ప్రభుత్వ పాఠశాలల బలోపేతం, డిజిటల్ ల్యాబ్‌లు, హాస్టల్ సౌకర్యాల మెరుగుదల మరియు యువతకు ఉద్యోగ నైపుణ్యాల శిక్షణ.",
      obj_5_title: "ఉపాధి కల్పన & జీవనోపాధి",
      obj_5_desc: "స్థానిక వ్యవసాయ ఆధారిత పరిశ్రమల ప్రోత్సాహం, కుటీర పరిశ్రమల స్థాపన మరియు నిరుద్యోగ యువతకు మార్గదర్శకత్వం.",
      obj_6_title: "మహిళా సాధికారత & కుటుంబ సంక్షేమం",
      obj_6_desc: "స్వయం సహాయక సంఘాలకు (SHG) తోడ్పాటు, మాతా-శిశు సంరక్షణ కేంద్రాలు మరియు మహిళా భద్రతా చర్యలు.",
      obj_7_title: "శుద్ధ తాగునీరు & పారిశుధ్యం",
      obj_7_desc: "ఫ్లోరైడ్ రహిత సురక్షిత తాగునీరు ప్రతి ఇంటికీ అందించడం మరియు గ్రామాల్లోని పురాతన చెరువుల పునరుద్ధరణ.",
      obj_8_title: "పారదర్శక ప్రజా పాలన",
      obj_8_desc: "నిరంతర గ్రామ వేదికలు, వార్డు స్థాయి ప్రజా బడ్జెట్ రూపకల్పన మరియు అవినీతి రహిత ప్రజా పరిపాలన.",

      /* Constituency Section */
      constituency_kicker: "భౌగోళిక & ప్రజా ప్రాతినిధ్యం",
      constituency_title: "OUR CONSTITUENCY",
      constituency_title_te: "మా నియోజకవర్గం",
      constituency_subtitle: "దేవరకొండ నియోజకవర్గం నల్గొండ జిల్లాలోని విస్తారమైన వ్యవసాయ భూములు, చారిత్రక సంపద మరియు శ్రమజీవుల సమాహారం.",
      constituency_tag: "దేవరకొండ శాసనసభ నియోజకవర్గం (ST)",
      constituency_district: "నల్గొండ జిల్లా, తెలంగాణ రాష్ట్రం",
      constituency_state: "తెలంగాణ రాష్ట్రం, భారతదేశం",

      /* Leadership Section */
      leadership_kicker: "సంస్థాగత నిర్వహణ",
      leadership_title: "నాయకత్వం & పాలక మండలి",
      leadership_subtitle: "పారదర్శక పౌర నాయకత్వానికి కట్టుబడిన ప్రజా కార్యకర్తలు, చట్ట నిపుణులు మరియు సామాజికవేత్తలతో నడుపబడుతోంది.",
      lead_notice: "పార్టీ కార్యవర్గ నామినేషన్లు మరియు వివిధ మండల కమిటీల నియామకాలు ప్రస్తుతం పార్టీ సెక్రటేరియట్ ద్వారా అధికారికంగా ఖరారవుతున్నాయి.",

      /* Party Structure */
      structure_kicker: "ప్రజాస్వామ్య నిర్మాణం",
      structure_title: "పార్టీ సంస్థాగత వ్యవస్థ",
      structure_subtitle: "గ్రామ ప్రతినిధులకు అత్యున్నత ప్రాధాన్యతనిస్తూ నిర్మించబడిన ప్రజాస్వామ్య వేదిక.",
      struct_1_title: "పార్టీ సర్వసభ్య సమావేశం & కేంద్ర మండలి",
      struct_1_role: "విధాన నిర్ణయాలు & రాజ్యాంగ మార్గదర్శకత్వం",
      struct_2_title: "నియోజకవర్గ కార్యనిర్వాహక మండలి",
      struct_2_role: "దేవరకొండ కేంద్ర సమన్వయం & వ్యూహం",
      struct_3a_title: "మండల సమన్వయ కమిటీలు",
      struct_3a_role: "7 మండలాల కార్యవర్గాలు & ప్రజా సంబంధాలు",
      struct_3b_title: "గ్రామ & వార్డు కార్యకలాపాల బృందాలు",
      struct_3b_role: "పోలింగ్ బూత్ టీమ్‌లు & స్థానిక ప్రతినిధులు",
      struct_3c_title: "సలహా మండలి & ప్రత్యేక విభాగాలు",
      struct_3c_role: "రైతు, యువజన, మహిళా & న్యాయ సలహా మండళ్లు",

      /* How We Work */
      work_kicker: "కార్యాచరణ పద్ధతి",
      work_title: "మన కార్యవిధానం",
      work_subtitle: "ప్రజా సమస్యలను నిరంతరం పర్యవేక్షిస్తూ, ఫలితాలు సాధించే క్రమబద్ధమైన ఆరు దశల ప్రయాణం.",
      step_1_title: "01. వినడం",
      step_1_desc: "ప్రతి పల్లెకు వెళ్లి ప్రజల నిజమైన సమస్యలను శ్రద్ధగా ఆలకించడం.",
      step_2_title: "02. అవగాహన",
      step_2_desc: "సమస్యల మూల కారణాలు, ప్రభుత్వ నిబంధనలపై లోతైన అధ్యయనం.",
      step_3_title: "03. చర్చించడం",
      step_3_desc: "గ్రామస్థులు మరియు మేధావులతో బహిరంగంగా పరిష్కారాలపై చర్చ.",
      step_4_title: "04. వ్యవస్థీకరణ",
      step_4_desc: "స్థానిక యువత మరియు పెద్దలతో బాధ్యతాయుత కార్యాచరణ బృందాల ఏర్పాటు.",
      step_5_title: "05. ఆచరణ",
      step_5_desc: "అధికారులకు వినతులు, న్యాయ పోరాటం మరియు శాంతియుత ప్రజా ఒత్తిడి.",
      step_6_title: "06. నివేదిక",
      step_6_desc: "చేసిన పని మరియు సాధించిన ప్రగతిని తిరిగి ప్రజల ముందే నివేదించడం.",

      /* Updates Section */
      updates_kicker: "అధికారిక సమాచారం",
      updates_title: "తాజా సమాచారం & ప్రకటనలు",
      updates_subtitle: "పార్టీ అధికారిక సర్క్యులర్లు, ప్రజా కార్యక్రమాలు మరియు నియోజకవర్గ సమీక్షలు.",
      filter_all: "అన్ని వివరాలు",
      filter_announcements: "ప్రకటనలు",
      filter_events: "సమావేశాలు",
      filter_activities: "క్షేత్రస్థాయి పనులు",
      btn_read_update: "పూర్తి సమాచారం",

      /* Gallery Section */
      gallery_kicker: "చిత్రమాలిక",
      gallery_title: "అధికారిక ఫోటో & మీడియా గ్యాలరీ",
      gallery_subtitle: "గ్రామ సభలు, నియోజకవర్గ ప్రదేశాలు మరియు అధికారిక కార్యక్రమాల దృశ్యాలు.",

      /* Get Involved Section */
      involve_kicker: "పౌర భాగస్వామ్యం",
      involve_title: "సర్వ సమృద్ధిలో భాగస్వామ్యం అవ్వండి",
      involve_subtitle: "ప్రజాస్వామ్య మార్పు అనేది చైతన్యవంతమైన పౌరుల ద్వారానే సాధ్యం. మీ సమయం, నైపుణ్యాలతో తోడ్పాటు అందించండి.",
      involve_intro_title: "దేవరకొండ భవిష్యత్తు నిర్మాణంలో మీరు చేరండి",
      involve_intro_desc: "మీ గ్రామంలో వాలంటీర్‌గా సేవ చేయాలన్నా, సలహాలు ఇవ్వాలన్నా లేదా స్థానిక సమస్యను మా దృష్టికి తేవాలన్నా ఈ వేదిక మీదే.",
      opt_volunteer: "మీ మండలంలో వాలంటీర్ అవ్వండి",
      opt_volunteer_desc: "గ్రామ స్థాయిలో అవగాహన సదస్సులు, సమావేశాల నిర్వహణలో తోడ్పడండి.",
      opt_suggestion: "స్థానిక సమస్యను నివేదించండి",
      opt_suggestion_desc: "చెడిపోయిన రోడ్లు, సాగునీటి కొరత లేదా ఇతర ఇబ్బందులను తెలియజేయండి.",
      opt_meeting: "ప్రజా సభలకు హాజరవ్వండి",
      opt_meeting_desc: "నిర్వహించబోయే గ్రామ వేదికలు మరియు ప్రజా చర్చల్లో పాల్గొనండి.",
      opt_contact: "పార్టీ సెక్రటేరియట్‌ను కలవండి",
      opt_contact_desc: "అధికారిక విచారణలు లేదా సంప్రదింపుల కోసం నేరుగా సంప్రదించండి.",

      /* Form Labels */
      form_name: "పూర్తి పేరు *",
      form_phone: "మొబైల్ ఫోన్ నంబర్ *",
      form_email: "ఈమెయిల్ చిరునామా (ఐచ్ఛికం)",
      form_mandal: "మండలం / ప్రాంతాన్ని ఎంచుకోండి *",
      form_category: "భాగస్వామ్య విభాగం *",
      form_message: "మీ సందేశం / సమస్య వివరాలు *",
      form_consent: "నేను అందించిన సమాచారం సరైనదని ధృవీకరిస్తున్నాను మరియు అధికారిక సందేశాలను స్వీకరించడానికి అంగీకరిస్తున్నాను.",
      form_submit_btn: "వివరాలను సమర్పించండి",
      form_submitting: "సమర్పిస్తున్నాము...",
      form_success_msg: "ధన్యవాదాలు! మీ అభ్యర్థన విజయవంతంగా నమోదైంది. రిఫరెన్స్ నంబర్: SSIP-",
      form_error_msg: "దయచేసి అన్ని తప్పనిసరి వివరాలను సరిగ్గా పూరించండి.",

      /* Contact Section */
      contact_kicker: "మమ్మల్ని సంప్రదించండి",
      contact_title: "అధికారిక పార్టీ సెక్రటేరియట్",
      contact_subtitle: "మా కేంద్ర పరిపాలనా కార్యాలయాన్ని లేదా మండల సమన్వయకర్తలను సంప్రదించండి.",
      contact_address_label: "పార్టీ కేంద్ర కార్యాలయం",
      contact_phone_label: "హెల్ప్‌లైన్ & విచారణలు",
      contact_email_label: "అధికారిక ఈమెయిల్",
      contact_hours_label: "పని వేళలు",
      contact_directions_btn: "కార్యాలయ చిరునామా చూడండి",

      /* Footer */
      footer_disclaimer_title: "అధికారిక సమాచార నిబంధన",
      footer_disclaimer_text: "సర్వ సమృద్ధి ఇండిపెండెంట్ పార్టీ అనేది తెలంగాణ రాష్ట్రం, నల్గొండ జిల్లా, దేవరకొండ నియోజకవర్గంలో పనిచేసే అధికారిక రాజకీయ వేదిక. ఈ వెబ్‌సైట్ మాత్రమే పార్టీ ప్రకటనలు, నిబంధనలకు ప్రామాణికమైనది. అనధికారిక నిధుల సేకరణలు లేదా తప్పుడు ప్రచారాలను పార్టీ ఆమోదించదు.",
      footer_rights: "సర్వ హక్కులు ప్రత్యేకించబడ్డాయి. సర్వ సమృద్ధి ఇండిపెండెంట్ పార్టీ అధికారిక పోర్టల్.",
      footer_privacy: "గోప్యతా విధానం",
      footer_terms: "నిబంధనలు",
      footer_accessibility: "యాక్సెసిబిలిటీ స్టేట్‌మెంట్"
    }
  };

  /* Vision Tree Data */
  const treeNodes = {
    roots: {
      key: "roots",
      en: {
        kicker: "Metaphor: The Roots",
        title: "Values & Grassroots Principles",
        desc: "Like deep roots anchored firmly in the soil, the party derives its strength from core democratic ideals and grassroots accountability.",
        points: [
          "Constitutional Integrity & Fundamental Rights protection",
          "Zero tolerance for political corruption and favoritism",
          "Direct listening to common citizens before taking decisions",
          "Respect for rural agricultural traditions and dignity of labor"
        ]
      },
      te: {
        kicker: "రూపకం: వేర్లు",
        title: "విలువలు & ప్రజాస్వామ్య పునాది",
        desc: "భూమిలో బలంగా పాతుకుపోయిన వేర్లలాగే, పార్టీ తన బలాన్ని రాజ్యాంగ విలువలు మరియు ప్రజల పట్ల నిజాయితీ నుంచి పొందుతుంది.",
        points: [
          "రాజ్యాంగ విలువలు మరియు ప్రాథమిక హక్కుల రక్షణ",
          "అవినీతి మరియు పక్షపాత రాజకీయాలకు తావులేని విధానం",
          "ఏ నిర్ణయమైనా తీసుకునే ముందు సామాన్య ప్రజల మాట వినడం",
          "గ్రామీణ వ్యవసాయ సంప్రదాయాలు మరియు శ్రమజీవుల గౌరవం"
        ]
      }
    },
    trunk: {
      key: "trunk",
      en: {
        kicker: "Metaphor: The Trunk",
        title: "Institutional Structure & Governance",
        desc: "The solid trunk symbolizes a resilient, organized, and transparent party structure that stands upright against pressure.",
        points: [
          "Decentralized leadership empowering village conveners",
          "Transparent accounting and open public disclosures",
          "Regular democratic consultations across all mandals",
          "Objective merit-based volunteer task assignments"
        ]
      },
      te: {
        kicker: "రూపకం: కాండం",
        title: "సంస్థాగత వ్యవస్థ & ప్రజా పాలన",
        desc: "ధృడమైన కాండం లాంటి సంస్థాగత నిర్మాణం; ప్రజా సమస్యలపై రాజీపడకుండా నిలబడే వ్యవస్థ.",
        points: [
          "గ్రామ సమన్వయకర్తలకు అధికారం కల్పించే వికేంద్రీకరణ",
          "పారదర్శక లెక్కలు మరియు బహిరంగ సంస్థాగత వివరాలు",
          "అన్ని మండలాల్లో క్రమం తప్పకుండా జరిగే ప్రజాస్వామ్య సమావేశాలు",
          "సేవా దృక్పథం మరియు ప్రతిభ ఆధారంగా బాధ్యతల అప్పగింత"
        ]
      }
    },
    branches: {
      key: "branches",
      en: {
        kicker: "Metaphor: The Branches",
        title: "Strategic Priorities & Development Pillars",
        desc: "Expanding wide in all directions, our branches represent key developmental domains that nurture the constituency.",
        points: [
          "Canal irrigation security, percolation tanks, and groundwater recharge",
          "Last-mile road connectivity to all thandas and rural hamlets",
          "Equipped primary healthcare facilities with emergency access",
          "Modern educational amenities and technical skills for youth"
        ]
      },
      te: {
        kicker: "రూపకం: శాఖలు (కొమ్మలు)",
        title: "అభివృద్ధి ప్రాధాన్యతలు & రంగాల విస్తరణ",
        desc: "నలుదిక్కులా విస్తరించే కొమ్మల వలె, నియోజకవర్గ సర్వతోముఖాభివృద్ధికి అవసరమైన ప్రధాన రంగాలు.",
        points: [
          "సాగునీటి కాలువలు, చెరువుల పూడికతీత మరియు భూగర్భ జలాల పెంపు",
          "అన్ని తండాలు మరియు పల్లెలకు నాణ్యమైన తారు రోడ్ల అనుసంధానం",
          "మెరుగైన మందులు, వైద్యులతో కూడిన ప్రాథమిక ఆరోగ్య కేంద్రాలు",
          "విద్యార్థులకు ఆధునిక విద్యా సౌకర్యాలు మరియు ఉపాధి నైపుణ్యాలు"
        ]
      }
    },
    leaves: {
      key: "leaves",
      en: {
        kicker: "Metaphor: The Leaves & Fruits",
        title: "Flourishing Community & Prosperity",
        desc: "Lush green foliage and fruitful canopy represent a prosperous society where every individual family thrives with security and pride.",
        points: [
          "Dignified income and assured security for agrarian households",
          "Self-reliant women through sustainable local enterprise",
          "Empowered youth gaining viable employment opportunities",
          "Peaceful, united, and culturally vibrant village communities"
        ]
      },
      te: {
        kicker: "రూపకం: ఆకులు & ఫలాలు",
        title: "సమృద్ధి సమాజం & ప్రజా సంక్షేమం",
        desc: "దట్టమైన పచ్చని ఆకులు, ఫలాల సమాహారం లాంటి సుసంపన్న సమాజం; ప్రతి కుటుంబం ఆత్మగౌరవంతో జీవించడం.",
        points: [
          "రైతు కుటుంబాలకు గౌరవప్రదమైన ఆదాయం మరియు ఆర్థిక భద్రత",
          "స్వయం ఉపాధి ద్వారా ఆర్థికంగా బలపడే మహిళా లోకం",
          "సొంత ఊళ్లలోనే ఉపాధి అవకాశాలు పొందే ఆత్మవిశ్వాసం గల యువత",
          "శాంతియుత, ఐకమత్యంతో వర్ధిల్లే గ్రామీణ సమాజం"
        ]
      }
    }
  };

  /* Mandals Directory Data */
  const mandalsData = {
    deverakonda: {
      id: "deverakonda",
      nameEn: "Deverakonda Mandal & Town",
      nameTe: "దేవరకొండ మండలం & పురపాలిక",
      headquarters: "Deverakonda Municipality",
      focusAreasEn: [
        "Urban drainage and solid waste modernization",
        "Upgradation of Area Hospital to Super-Specialty facilities",
        "Preservation and tourism development of Historic Deverakonda Fort",
        "Organized vegetable & commercial market yards for local farmers"
      ],
      focusAreasTe: [
        "పట్టణ డ్రైనేజీ మరియు వ్యర్థాల నిర్వహణ ఆధునీకరణ",
        "ఏరియా ఆసుపత్రిని సూపర్ స్పెషాలిటీగా తీర్చిదిద్దడం",
        "చారిత్రక దేవరకొండ కోట పరిరక్షణ & పర్యాటక అభివృద్ధి",
        "రైతుల కోసం ఆధునిక కూరగాయల మార్కెట్ సౌకర్యాలు"
      ],
      profileEn: "The administrative and commercial epicentre of the constituency, surrounded by historic granite hills and vibrant trade routes.",
      profileTe: "నియోజకవర్గానికి పరిపాలనా మరియు వాణిజ్య కేంద్రం; చారిత్రక కొండలు మరియు వ్యాపార కేంద్రాలతో కూడిన ప్రధాన పట్టణం.",
      partyNode: "Central Secretariat Liaison Cell"
    },
    chinthapally: {
      id: "chinthapally",
      nameEn: "Chinthapally Mandal",
      nameTe: "చింతపల్లి మండలం",
      headquarters: "Chinthapally",
      focusAreasEn: [
        "Reliable agricultural power supply during cultivation cycles",
        "Primary health centre staffing and round-the-clock doctors",
        "Highway safety and link roads connecting interior hamlets",
        "Cold storage facilities for local tomato and vegetable produce"
      ],
      focusAreasTe: [
        "పంట కాలంలో నిరంతర నాణ్యమైన వ్యవసాయ విద్యుత్ సరఫరా",
        "ప్రాథమిక ఆరోగ్య కేంద్రంలో 24 గంటల వైద్యుల లభ్యత",
        "అంతర్గత గ్రామాలు, తండాలకు సురక్షితమైన లింక్ రోడ్లు",
        "టమాట మరియు కూరగాయల రైతుల కోసం కోల్డ్ స్టోరేజ్ సౌకర్యం"
      ],
      profileEn: "Key agrarian belt known for diverse cash crops, vibrant horticulture, and numerous traditional rural settlements.",
      profileTe: "వాణిజ్య పంటలు, కూరగాయల సాగు మరియు సాంప్రదాయ గ్రామీణ ఆవాసాలకు ప్రసిద్ధి చెందిన వ్యవసాయ మండలం.",
      partyNode: "Chinthapally Mandal Coordination Committee"
    },
    gundlapally: {
      id: "gundlapally",
      nameEn: "Gundlapally (Dindi) Mandal",
      nameTe: "గుండ్లపల్లి (దిండి) మండలం",
      headquarters: "Gundlapally / Dindi",
      focusAreasEn: [
        "Dindi Reservoir water management and downstream canal repairs",
        "Horticulture incentives for citrus and mango orchards",
        "Eco-tourism promotion along the Dindi river basin",
        "Youth skill centre for technical and mechanical trades"
      ],
      focusAreasTe: [
        "దిండి ప్రాజెక్ట్ నీటి నిర్వహణ మరియు కాలువల మరమ్మతులు",
        "బత్తాయి, మామిడి తోటల రైతులకు అవసరమైన ప్రోత్సాహకాలు",
        "దిండి పరీవాహక ప్రాంతంలో పర్యాటక అవకాశాల సృష్టి",
        "గ్రామీణ యువతకు సాంకేతిక నైపుణ్య శిక్షణా కేంద్రం"
      ],
      profileEn: "Home to the vital Dindi project, combining water storage infrastructure, scenic nature, and rich agrarian fields.",
      profileTe: "కీలకమైన దిండి ప్రాజెక్ట్ గల మండలం; సాగునీటి వనరులు మరియు సుందరమైన ప్రకృతితో కూడిన ప్రాంతం.",
      partyNode: "Dindi Project & Mandal Outreach Desk"
    },
    chandampet: {
      id: "chandampet",
      nameEn: "Chandampet Mandal",
      nameTe: "చందంపేట మండలం",
      headquarters: "Chandampet",
      focusAreasEn: [
        "Tribal hamlet (Thanda) drinking water and road connectivity",
        "Irrigation lift schemes along the river catchment",
        "Upgraded residential tribal welfare hostels and schools",
        "Mobile veterinary and medical care for remote areas"
      ],
      focusAreasTe: [
        "గిరిజన తండాలకు శుద్ధ తాగునీరు మరియు శాశ్వత రోడ్డు వసతి",
        "నదీ పరివాహక ప్రాంతాల్లో ఎత్తిపోతల సాగునీటి పథకాలు",
        "గిరిజన సంక్షేమ హాస్టళ్లు, పాఠశాలల మౌలిక వసతుల పెంపు",
        "మారుమూల ప్రాంతాలకు సంచార వైద్య మరియు పశువైద్య సేవలు"
      ],
      profileEn: "Culturally rich forest and hill terrain with proud tribal communities advocating for durable infrastructure.",
      profileTe: "గిరిజన సంస్కృతి, అటవీ మరియు కొండ ప్రాంతాలతో కూడిన మండలం; సమగ్ర మౌలిక వసతులు అవసరమైన ప్రాంతం.",
      partyNode: "Chandampet Tribal & Community Council"
    },
    neredugommu: {
      id: "neredugommu",
      nameEn: "Neredugommu Mandal",
      nameTe: "నేరేడుగొమ్ము మండలం",
      headquarters: "Neredugommu",
      focusAreasEn: [
        "Backwater lift irrigation security and canal desiltation",
        "Fisheries cooperative strengthening and equipment support",
        "Primary education accessibility and transport subsidies",
        "Strengthening primary healthcare sub-centres"
      ],
      focusAreasTe: [
        "బ్యాక్ వాటర్ ఆధారిత లిఫ్ట్ ఇరిగేషన్ మరియు కాలువల పూడికతీత",
        "మత్స్యకార సహకార సంఘాల బలోపేతం మరియు రాయితీలు",
        "మారుమూల గ్రామాల విద్యార్థులకు రవాణా సౌకర్యాలు",
        "సబ్ సెంటర్లలో ప్రాథమిక వైద్య సేవలను పటిష్టం చేయడం"
      ],
      profileEn: "Flourishing adjacent to Krishna backwaters, with immense agrarian, inland fisheries, and rural potential.",
      profileTe: "కృష్ణా నదీ బ్యాక్ వాటర్ సమీపంలోని మండలం; వ్యవసాయం మరియు మత్స్య సంపదకు అనువైన ప్రాంతం.",
      partyNode: "Neredugommu Rural Outreach Desk"
    },
    papally: {
      id: "papally",
      nameEn: "Pedda Adiserla Pally (P.A. Pally)",
      nameTe: "పెద్ద అడిశర్లపల్లి (పి.ఎ. పల్లి)",
      headquarters: "P.A. Pally",
      focusAreasEn: [
        "Irrigation tail-end water supply protection for farming",
        "Establishment of agro-processing and warehousing clusters",
        "Quality drinking water plant maintenance in all wards",
        "Government junior college facilities for rural youth"
      ],
      focusAreasTe: [
        "చివరి ఆయకట్టు రైతులకు సాగునీరు సక్రమంగా అందేలా చూడడం",
        "వ్యవసాయ గోదాములు మరియు ధాన్యం నిల్వ కేంద్రాల ఏర్పాటు",
        "అన్ని గ్రామాల్లో ఆర్వో ప్లాంట్ల నిరంతర నిర్వహణ",
        "స్థానిక విద్యార్థుల కోసం ప్రభుత్వ జూనియర్ కళాశాల వసతులు"
      ],
      profileEn: "Dynamic rural intersection known for extensive cotton, paddy, and pulse cultivation.",
      profileTe: "పత్తి, వరి మరియు అపరాల సాగుకు ప్రసిద్ధి చెందిన ప్రధాన గ్రామీణ కూడలి మండలం.",
      partyNode: "P.A. Pally Constituency Liaison Unit"
    },
    gurrampode: {
      id: "gurrampode",
      nameEn: "Gurrampode Mandal (Constituent Belt)",
      nameTe: "గుర్రంపోడు మండలం",
      headquarters: "Gurrampode",
      focusAreasEn: [
        "Tank rejuvenation and watershed restoration",
        "Inter-mandal connectivity roads maintenance",
        "Health worker presence and emergency transportation",
        "Seed and fertilizer distribution transparency"
      ],
      focusAreasTe: [
        "చెరువుల పునరుద్ధరణ మరియు వాటర్‌షెడ్ కార్యక్రమాలు",
        "మండల ప్రధాన రహదారుల మరమ్మతులు మరియు నాణ్యత పర్యవేక్షణ",
        "గ్రామీణ ఆరోగ్య కార్యకర్తల లభ్యత మరియు అత్యవసర రవాణా",
        "రైతులకు సబ్సిడీ విత్తనాలు, ఎరువుల పారదర్శక పంపిణీ"
      ],
      profileEn: "Vibrant agricultural belt with active farmer collectives and traditional village irrigation networks.",
      profileTe: "రైతు సంఘాలు మరియు సాంప్రదాయ చెరువులతో కూడిన చైతన్యవంతమైన గ్రామీణ మండలం.",
      partyNode: "Gurrampode Community Action Cell"
    }
  };

  /* Detailed Focus Areas for Objectives Modal */
  const objectiveDetails = {
    agriculture: {
      titleEn: "Agriculture & Water Security",
      titleTe: "వ్యవసాయం & సాగునీటి భద్రత",
      descEn: "Agriculture is the lifeblood of Deverakonda. The party stands for tangible structural support rather than hollow election slogans.",
      descTe: "వ్యవసాయం దేవరకొండ జీవనాడి. ఎన్నికల నినాదాలు కాకుండా రైతుకు నిజమైన క్షేత్రస్థాయి తోడ్పాటు అందించడమే మా లక్ష్యం.",
      itemsEn: [
        "Ensuring tail-end water reaches every ayacut in Deverakonda canal networks",
        "Zero-tolerance monitoring of adulterated seeds, fertilizers, and pesticides",
        "Decentralized grain procurement centers closer to remote thandas and villages",
        "Prompt crop damage enumeration and fair compensation directly to farmers",
        "Promotion of soil-testing laboratories and solar-assisted irrigation units"
      ],
      itemsTe: [
        "కాలువల ద్వారా చివరి ఆయకట్టు పొలాల వరకు సాగునీరు అందేలా పర్యవేక్షణ",
        "నకిలీ విత్తనాలు, పురుగుమందులు అమ్మేవారిపై కఠిన చర్యల కోసం పోరాటం",
        "మారుమూల తండాలు, గ్రామాలకు సమీపంలోనే ధాన్యం కొనుగోలు కేంద్రాలు",
        "ప్రకృతి వైపరీత్యాల సమయంలో సత్వర పంట నష్ట పరిహారం రైతులకు చేరేలా చర్యలు",
        "మట్టి పరీక్షల ల్యాబ్‌లు మరియు సౌర విద్యుత్ పంపుల ప్రోత్సాహం"
      ]
    },
    infrastructure: {
      titleEn: "Roads & Rural Infrastructure",
      titleTe: "రహదారులు & గ్రామీణ మౌలిక వసతులు",
      descEn: "True empowerment begins when every citizen can travel safely without life-threatening road hazards or isolated villages during monsoons.",
      descTe: "మారుమూల పల్లెలకు సైతం సురక్షితమైన రవాణా వసతులు కల్పించినప్పుడే అసలైన అభివృద్ధి సాధ్యమవుతుంది.",
      itemsEn: [
        "Priority blacktopping of unpaved mud tracks leading into interior tribal thandas",
        "Widening of crucial arterial routes linking Deverakonda to surrounding mandal hubs",
        "Construction of sturdy culverts and bridges across streams vulnerable to monsoon floods",
        "Solar street lighting and systematic paved drainage systems in major gram panchayats",
        "Expansion of RTC bus frequency to school and college timings for students"
      ],
      itemsTe: [
        "మారుమూల గిరిజన తండాలకు వెళ్లే మట్టి రోడ్లను శాశ్వత తారు రోడ్లుగా మార్చడం",
        "దేవరకొండను మండల కేంద్రాలతో కలిపే ప్రధాన రహదారుల విస్తరణ",
        "వర్షాకాలంలో వాగుల వద్ద రాకపోకలు ఆగకుండా శాశ్వత వంతెనల నిర్మాణం",
        "గ్రామ పంచాయతీలలో సోలార్ వీధి దీపాలు మరియు క్రమబద్ధమైన డ్రైనేజీ వ్యవస్థ",
        "విద్యార్థుల కోసం స్కూలు, కాలేజీ వేళల్లో బస్సుల సంఖ్యను పెంచడం"
      ]
    },
    healthcare: {
      titleEn: "Quality Public Healthcare",
      titleTe: "నాణ్యమైన ప్రభుత్వ వైద్యం",
      descEn: "No family should fall into crippling debt because of medical emergencies. Deverakonda deserves robust local health infrastructure.",
      descTe: "వైద్యం కోసం పేద కుటుంబాలు అప్పులపాలు కాకూడదు; నియోజకవర్గంలోనే నాణ్యమైన చికిత్స లభించాలి.",
      itemsEn: [
        "Ensuring 24/7 doctor and nursing presence at all Primary Health Centres (PHCs)",
        "Adequate stock of essential snakebite anti-venom, insulin, and maternal medications",
        "Dedicated neonatal and pediatric intensive care units at Deverakonda Area Hospital",
        "Fleet of well-maintained emergency ambulances stationed across remote sectors",
        "Regular preventative health screening camps for fluorosis and chronic conditions"
      ],
      itemsTe: [
        "అన్ని ప్రాథమిక ఆరోగ్య కేంద్రాలలో (PHC) 24 గంటలూ వైద్యులు, సిబ్బంది ఉండేలా చూడడం",
        "పాముకాటు మందులు, ఇన్సులిన్ మరియు అత్యవసర మందుల నిరంతర లభ్యత",
        "దేవరకొండ ఏరియా ఆసుపత్రిలో ప్రత్యేక చిన్నపిల్లల మరియు ప్రసవ చికిత్సా విభాగాలు",
        "మారుమూల ప్రాంతాల కోసం నిరంతరం అందుబాటులో ఉండే అంబులెన్స్ వ్యవస్థ",
        "ఫ్లోరోసిస్ మరియు దీర్ఘకాలిక వ్యాధుల నివారణకు ఉచిత వైద్య పరీక్షల శిబిరాలు"
      ]
    },
    education: {
      titleEn: "Education & Youth Skills",
      titleTe: "విద్య & యువత నైపుణ్యాభివృద్ధి",
      descEn: "Quality public education is the greatest equalizing force. We advocate for world-class resources in government educational institutions.",
      descTe: "ప్రభుత్వ పాఠశాలలు, కళాశాలల్లో చదివే పేద విద్యార్థులకు కార్పొరేట్ దీటుగా వసతులు కల్పించడం మా బాధ్యత.",
      itemsEn: [
        "Modern hygienic sanitation facilities, drinking water, and libraries in all government schools",
        "Digital classrooms and computer education introduced from primary levels",
        "Upgradation of student welfare hostels with quality food and safe lodging",
        "Free coaching libraries in Deverakonda for competitive exams and higher education",
        "Vocational training programs aligned with regional technical employment needs"
      ],
      itemsTe: [
        "ప్రభుత్వ పాఠశాలల్లో పరిశుభ్రమైన మరుగుదొడ్లు, తాగునీరు మరియు గ్రంథాలయాల ఏర్పాటు",
        "ప్రాథమిక స్థాయి నుంచే కంప్యూటర్ విద్య మరియు డిజిటల్ తరగతుల నిర్వహణ",
        "విద్యార్థుల సంక్షేమ హాస్టళ్లలో పౌష్టికాహారం, నాణ్యమైన వసతుల కల్పన",
        "కాంపిటీటివ్ పరీక్షలకు సిద్ధమయ్యే నిరుద్యోగుల కోసం ఉచిత కోచింగ్ లైబ్రరీల ఏర్పాటు",
        "స్థానిక పారిశ్రామిక అవసరాలకు అనుగుణంగా యువతకు వృత్తి విద్యా శిక్షణ"
      ]
    },
    employment: {
      titleEn: "Livelihood & Employment",
      titleTe: "ఉపాధి కల్పన & పరిశ్రమలు",
      descEn: "Preventing forced migration by creating sustainable economic opportunities inside Deverakonda Constituency.",
      descTe: "వలసలు నివారించి, స్థానికంగానే గౌరవప్రదమైన ఉపాధి అవకాశాలు కల్పించడమే ధ్యేయం.",
      itemsEn: [
        "Attracting agro-based packaging and processing units in notified industrial zones",
        "Incentivizing local handloom, pottery, and traditional crafts cooperatives",
        "Transparent local employment liaison cell connecting youth with verified job fairs",
        "Micro-enterprise mentorship and collateral-free loan assistance for rural entrepreneurs",
        "Protection of fair daily wages and timely payments for employment guarantee workers"
      ],
      itemsTe: [
        "వ్యవసాయ ఉత్పత్తుల ఆధారిత ప్రాసెసింగ్ యూనిట్లను నియోజకవర్గంలో ప్రోత్సహించడం",
        "చేనేత, కుమ్మరి మరియు సాంప్రదాయ చేతివృత్తుల వారికి సహకార ప్రోత్సాహకాలు",
        "ఉద్యోగ అవకాశాల సమాచారం అందించే ఉచిత ఉపాధి సమాచార కేంద్రం",
        "గ్రామీణ ఔత్సాహిక పారిశ్రామికవేత్తలకు మార్గదర్శకత్వం మరియు రుణ సహాయం",
        "ఉపాధి హామీ పథకం కూలీలకు సకాలంలో వేతనాలు అందేలా నిరంతర పర్యవేక్షణ"
      ]
    },
    women: {
      titleEn: "Women & Family Welfare",
      titleTe: "మహిళా సాధికారత & కుటుంబ సంక్షేమం",
      descEn: "Supporting the foundational strength of every home with economic independence, health security, and safety.",
      descTe: "మహిళల ఆర్థిక స్వావలంబన, ఆరోగ్యం మరియు ఆత్మగౌరవ రక్షణే కుటుంబ శ్రేయస్సుకు మూలం.",
      itemsEn: [
        "Strengthening Mahila Samakhyas and Self-Help Group (SHG) zero-interest micro-credit",
        "Installation of high-definition CCTV security surveillance at transit and market points",
        "Accessible maternal and child health centers with specialized gynecological care",
        "Sanitary hygiene vending units in all government high schools and colleges",
        "Legal awareness cells supporting women facing domestic and property injustice"
      ],
      itemsTe: [
        "మహిళా పొదుపు సంఘాలకు (SHG) సున్నా వడ్డీ రుణాల మంజూరుకు సంపూర్ణ మద్దతు",
        "బస్టాండ్లు, కూడళ్ల వద్ద మహిళల భద్రత కోసం సీసీ కెమెరాల ఏర్పాటు",
        "గర్భిణీలు, బాలింతల కోసం ప్రత్యేక పోషకాహార కేంద్రాలు & వైద్య నిపుణుల సేవలు",
        "అన్ని ప్రభుత్వ ఉన్నత పాఠశాలలు, కాలేజీల్లో శానిటరీ న్యాప్‌కిన్ వెండింగ్ మెషీన్లు",
        "మహిళలకు అండగా ఉండే ఉచిత న్యాయ సలహా కేంద్రాల నిర్వహణ"
      ]
    },
    water: {
      titleEn: "Safe Drinking Water & Sanitation",
      titleTe: "శుద్ధ తాగునీరు & పారిశుధ్యం",
      descEn: "Access to clean, fluoride-safe drinking water is a fundamental human right that must be guaranteed to every resident.",
      descTe: "ఫ్లోరైడ్ రహిత పరిశుభ్రమైన తాగునీరు పొందడం ప్రతి పౌరుడి ప్రాథమిక హక్కు.",
      itemsEn: [
        "Rigorous weekly water quality testing across all village overhead tanks and RO plants",
        "Immediate rectification of broken water supply valves and leaking distribution lines",
        "Rejuvenation of traditional chain-link percolation tanks for groundwater replenishment",
        "Modern solid-waste segregation sheds in all gram panchayats to prevent open burning",
        "Comprehensive drain clearance programs ahead of monsoon season to prevent fevers"
      ],
      itemsTe: [
        "అన్ని గ్రామాల్లోని వాటర్ ట్యాంకులు, ఆర్వో ప్లాంట్ల నీటి నాణ్యతను తరచుగా పరీక్షించడం",
        "తాగునీటి పైప్‌లైన్ల లీకేజీలు, మోటార్ల మరమ్మతులను వెంటనే సరిచేయించడం",
        "భూగర్భ జలాలు పెంచడానికి గొలుసుకట్టు చెరువుల పూడికతీత & పునరుద్ధరణ",
        "గ్రామాల్లో ప్లాస్టిక్ మరియు చెత్త నిర్వహణ కోసం శాస్త్రీయ పద్ధతుల అమలు",
        "వర్షాకాలంలో వ్యాధులు ప్రబలకుండా ముందస్తుగా డ్రైనేజీల పూడికతీత పనులు"
      ]
    },
    governance: {
      titleEn: "Transparent Public Governance",
      titleTe: "పారదర్శక ప్రజా పాలన",
      descEn: "Power belongs to the citizens. The party enforces open accountability through regular public grievance assemblies.",
      descTe: "ప్రజాస్వామ్యంలో ప్రజలే యజమానులు; పాలనలో జవాబుదారీతనమే మా మొదటి ప్రాధాన్యత.",
      itemsEn: [
        "Conducting monthly Grama Vedikas (open public hearings) in every mandal",
        "Publishing transparent constituency development spending reports openly to the public",
        "Facilitating free citizen assistance desks for pensions, ration cards, and land records",
        "Independent citizen grievance helpline with tracked resolution timelines",
        "Vigilant defense of constitutional values, secular harmony, and social equality"
      ],
      itemsTe: [
        "ప్రతి మండలంలో నెలకు ఒకసారి బహిరంగ ప్రజా వినతుల వేదిక (గ్రామ వేదిక) నిర్వహణ",
        "నియోజకవర్గానికి వచ్చే నిధులు, పనుల ఖర్చుల వివరాలను బహిరంగంగా ప్రజలకు వెల్లడించడం",
        "పింఛన్లు, రేషన్ కార్డులు, ధరణి సమస్యలపై సామాన్యులకు ఉచిత దరఖాస్తు సహాయ కేంద్రాలు",
        "సమస్యల పరిష్కారాన్ని ట్రాక్ చేసే ప్రజా ఫిర్యాదుల హెల్ప్‌లైన్ నిర్వహణ",
        "రాజ్యాంగ విలువలు, సామరస్యం మరియు సామాజిక సమానత్వం కోసం రాజీలేని పోరాటం"
      ]
    }
  };

  /* Updates Feed Data */
  const updatesData = [
    {
      id: "up-1",
      category: "announcements",
      categoryNameEn: "Official Announcement",
      categoryNameTe: "అధికారిక ప్రకటన",
      dateEn: "September 20, 2026",
      dateTe: "20 సెప్టెంబర్ 2026",
      titleEn: "Resolution on Constituency Canal Water Allocation Submitted to Irrigation Authorities",
      titleTe: "సాగునీటి కాలువల కేటాయింపులపై ఇరిగేషన్ అధికారులకు ప్రజా వినతిపత్రం సమర్పణ",
      excerptEn: "Party representatives and local agricultural delegates submitted a formal resolution demanding immediate tail-end water release for early season farming across Deverakonda mandals.",
      excerptTe: "దేవరకొండ మండలాల్లోని చివరి ఆయకట్టు రైతులకు తక్షణమే సాగునీరు విడుదల చేయాలని డిమాండ్ చేస్తూ పార్టీ ప్రతినిధులు, రైతు నాయకులు ఇరిగేషన్ అధికారులకు వినతిపత్రం సమర్పించారు.",
      image: "assets/images/community_assembly.jpg",
      bodyEn: "A delegation representing Sarva Samrudhhi Independent Party met with senior irrigation engineers at Deverakonda to apprise them of acute tail-end water shortages reported by cultivators in P.A. Pally, Chinthapally, and Neredugommu mandals. The delegation presented empirical field data gathered from 14 villages, urging immediate desiltation of feeder channels and strict adherence to the rotational water release schedule. The authorities assured that maintenance work on critical sluices would commence within the fortnight.",
      bodyTe: "పి.ఎ. పల్లి, చింతపల్లి, నేరేడుగొమ్ము మండలాల్లోని చివరి ఆయకట్టు రైతులు ఎదుర్కొంటున్న సాగునీటి కొరతపై సర్వ సమృద్ధి ఇండిపెండెంట్ పార్టీ ప్రతినిధుల బృందం దేవరకొండ ఇరిగేషన్ అధికారులను కలిసి చర్చించింది. 14 గ్రామాల నుంచి సేకరించిన క్షేత్రస్థాయి వివరాలను అధికారులకు అందజేసి, తక్షణమే కాలువల్లో పూడికతీత పనులు చేపట్టాలని మరియు నీటి విడుదల షెడ్యూల్‌ను పక్కాగా అమలు చేయాలని కోరింది."
    },
    {
      id: "up-2",
      category: "events",
      categoryNameEn: "Public Consultation",
      categoryNameTe: "ప్రజా వేదిక",
      dateEn: "September 15, 2026",
      dateTe: "15 సెప్టెంబర్ 2026",
      titleEn: "Grassroots Civic Listening Assembly (Grama Vedika) Organized at Dindi Mandal",
      titleTe: "దిండి మండలంలో విజయవంతంగా నిర్వహించిన బహిరంగ ప్రజా వేదిక",
      excerptEn: "Over two hundred local residents, farmers, and village elders participated in a constructive open dialogue addressing road connectivity and primary healthcare amenities.",
      excerptTe: "రహదారులు, ప్రాథమిక వైద్య సదుపాయాల పరిష్కారంపై దిండి మండలంలో జరిగిన బహిరంగ చర్చలో రెండు వందలకు పైగా గ్రామస్థులు, రైతులు, పెద్దలు పాల్గొన్నారు.",
      image: "assets/images/deverakonda_landscape.jpg",
      bodyEn: "Continuing its commitment to direct constituent listening, Sarva Samrudhhi Independent Party held its scheduled Grama Vedika at Dindi. Local residents voiced serious concerns regarding non-functioning streetlights, irregular doctor attendance at the local primary health centre, and lack of direct bus connectivity for girl students travelling to college in Deverakonda. All resolutions passed during the assembly have been documented and submitted to respective district departments.",
      bodyTe: "ప్రజల గొంతుకను నేరుగా వినే సంకల్పంతో దిండి మండల కేంద్రంలో గ్రామ వేదిక కార్యక్రమం జరిగింది. స్థానిక పిహెచ్‌సిలో వైద్యుల నిరంతర హాజరు, విద్యార్థినుల కోసం దేవరకొండకు సరిపడా బస్సు సర్వీసులు మరియు గ్రామీణ రోడ్ల మరమ్మతులపై గ్రామస్థులు మాట్లాడారు. సమావేశంలో ఆమోదించిన అంశాలను అధికారిక వినతులుగా సంబంధిత జిల్లా అధికారులకు అందజేయడం జరిగింది."
    },
    {
      id: "up-3",
      category: "activities",
      categoryNameEn: "Field Activity",
      categoryNameTe: "క్షేత్రస్థాయి పరిశీలన",
      dateEn: "September 08, 2026",
      dateTe: "08 సెప్టెంబర్ 2026",
      titleEn: "Inspection of Drinking Water RO Plants and School Sanitation Across Chandampet",
      titleTe: "చందంపేట మండలంలో తాగునీటి ఆర్వో ప్లాంట్లు, పాఠశాలల పారిశుధ్యంపై క్షేత్రస్థాయి పరిశీలన",
      excerptEn: "Volunteers conducted an empirical audit of rural water treatment units, identifying maintenance needs to ensure pure drinking water for every family.",
      excerptTe: "మారుమూల గిరిజన ప్రాంతాల్లోని తాగునీటి ప్లాంట్ల పనితీరు, పాఠశాలల్లో విద్యార్థుల వసతులపై కార్యకర్తల బృందం సమగ్ర అధ్యయనం చేపట్టింది.",
      image: "assets/images/community_assembly.jpg",
      bodyEn: "A team of civic volunteers audited twelve village RO drinking water units across Chandampet and Neredugommu mandals. The team found that four units were operating at reduced capacity due to pending filter cartridge replacements. A formal notice was delivered to the local panchayat executive officers requesting urgent technical servicing so that clean drinking water supply is not disrupted.",
      bodyTe: "చందంపేట, నేరేడుగొమ్ము మండలాల్లోని పన్నెండు ఆర్వో తాగునీటి ప్లాంట్లను వాలంటీర్ల బృందం పరిశీలించింది. ఫిల్టర్ల నిర్వహణ లోపం వల్ల కొన్ని యూనిట్లలో నీటి సరఫరా మందగించినట్లు గుర్తించి, వెంటనే మరమ్మతులు చేయించాలని స్థానిక పంచాయతీ అధికారులకు లిఖితపూర్వకంగా విజ్ఞప్తి చేసింది."
    }
  ];

  /* Gallery Archive Data */
  const galleryData = [
    {
      id: "gal-1",
      image: "assets/images/party_poster.jpg",
      captionEn: "Official Party Campaign Poster • Deverakonda Constituency",
      captionTe: "అధికారిక ప్రచార పోస్టర్ • దేవరకొండ నియోజకవర్గం",
      categoryEn: "Official Poster",
      categoryTe: "అధికారిక పోస్టర్",
      span2: false
    },
    {
      id: "gal-2",
      image: "assets/images/deverakonda_landscape.jpg",
      captionEn: "Historic Granite Hills and Agricultural Greenery of Deverakonda",
      captionTe: "చారిత్రక కొండలు మరియు సస్యశ్యామలమైన దేవరకొండ పరిసరాలు",
      categoryEn: "Constituency Landscape",
      categoryTe: "నియోజకవర్గ దృశ్యం",
      span2: true
    },
    {
      id: "gal-3",
      image: "assets/images/party_tree_emblem.jpg",
      captionEn: "The Tree of Collective Prosperity • Official Insignia",
      captionTe: "సామూహిక సమృద్ధి వృక్షం • పార్టీ అధికారిక ముద్ర",
      categoryEn: "Party Identity",
      categoryTe: "పార్టీ చిహ్నం",
      span2: false
    },
    {
      id: "gal-4",
      image: "assets/images/community_assembly.jpg",
      captionEn: "Grassroots Village Assembly & Civic Consultation under the Village Tree",
      captionTe: "గ్రామ వృక్షం నీడన జరుగుతున్న ప్రజా వేదిక మరియు ప్రజాస్వామ్య సమాలోచన",
      categoryEn: "Public Consultation",
      categoryTe: "ప్రజా సభ",
      span2: true
    }
  ];

  /* ==========================================================================
     2. GLOBAL STATE & SELECTORS
     ========================================================================== */

  let currentLang = 'en';
  let activeTreePart = 'roots';
  let activeMandal = 'deverakonda';
  let activeUpdatesFilter = 'all';
  let lightboxCurrentIndex = 0;

  // DOM Elements cache
  const elements = {
    body: document.body,
    header: document.querySelector('.site-header'),
    langToggleBtns: document.querySelectorAll('.lang-toggle-btn'),
    mobileMenuBtn: document.querySelector('.mobile-menu-toggle'),
    mobileDrawer: document.querySelector('.mobile-drawer'),
    drawerBackdrop: document.querySelector('.drawer-backdrop'),
    drawerCloseBtn: document.querySelector('.drawer-close-btn'),
    drawerLinks: document.querySelectorAll('.drawer-nav-link'),
    navLinks: document.querySelectorAll('.nav-link'),
    treeTabs: document.querySelectorAll('.tree-part-tab-btn'),
    treeNodes: document.querySelectorAll('.tree-node-marker'),
    treePanelKicker: document.getElementById('treePanelKicker'),
    treePanelTitle: document.getElementById('treePanelTitle'),
    treePanelDesc: document.getElementById('treePanelDesc'),
    treePanelPoints: document.getElementById('treePanelPoints'),
    mandalTabs: document.querySelectorAll('.mandal-tab-btn'),
    mandalTitle: document.getElementById('mandalTitle'),
    mandalDesc: document.getElementById('mandalDesc'),
    mandalFocusList: document.getElementById('mandalFocusList'),
    mandalHqVal: document.getElementById('mandalHqVal'),
    mandalNodeVal: document.getElementById('mandalNodeVal'),
    updatesContainer: document.getElementById('updatesGrid'),
    updatesFilterBtns: document.querySelectorAll('.update-filter-btn'),
    galleryContainer: document.getElementById('galleryGrid'),
    lightboxModal: document.getElementById('lightboxModal'),
    lightboxImg: document.getElementById('lightboxImg'),
    lightboxCaption: document.getElementById('lightboxCaption'),
    lightboxClose: document.getElementById('lightboxClose'),
    lightboxPrev: document.getElementById('lightboxPrev'),
    lightboxNext: document.getElementById('lightboxNext'),
    objectiveCards: document.querySelectorAll('.objective-card'),
    objectiveModal: document.getElementById('objectiveModal'),
    objectiveModalTitle: document.getElementById('objModalTitle'),
    objectiveModalBody: document.getElementById('objModalBody'),
    objectiveModalClose: document.getElementById('objModalClose'),
    updateDetailModal: document.getElementById('updateModal'),
    updateModalTitle: document.getElementById('updateModalTitle'),
    updateModalMeta: document.getElementById('updateModalMeta'),
    updateModalBody: document.getElementById('updateModalBody'),
    updateModalClose: document.getElementById('updateModalClose'),
    genericModal: document.getElementById('genericModal'),
    genericModalTitle: document.getElementById('genericModalTitle'),
    genericModalBody: document.getElementById('genericModalBody'),
    genericModalClose: document.getElementById('genericModalClose'),
    involvementForm: document.getElementById('involvementForm'),
    formStatusAlert: document.getElementById('formStatusAlert')
  };

  /* ==========================================================================
     3. LANGUAGE SWITCHING ENGINE
     ========================================================================== */

  function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'te') return;
    currentLang = lang;

    try {
      localStorage.setItem('ssip_lang', lang);
    } catch (e) {
      // Storage might be restricted
    }

    if (lang === 'te') {
      document.documentElement.lang = 'te';
      elements.body.classList.add('lang-te');
    } else {
      document.documentElement.lang = 'en';
      elements.body.classList.remove('lang-te');
    }

    // Update document title
    document.title = translations[lang].site_title;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update form placeholders & select options
    updateFormLanguage(lang);

    // Update Dynamic Panels
    renderTreePanel(activeTreePart);
    renderMandalDetails(activeMandal);
    renderUpdates(activeUpdatesFilter);
    renderGallery();

    // Update language toggle button visual text
    elements.langToggleBtns.forEach(btn => {
      const enSpan = btn.querySelector('.lang-en');
      const teSpan = btn.querySelector('.lang-te');
      if (enSpan && teSpan) {
        if (lang === 'te') {
          teSpan.classList.add('lang-active');
          enSpan.classList.remove('lang-active');
        } else {
          enSpan.classList.add('lang-active');
          teSpan.classList.remove('lang-active');
        }
      }
    });
  }

  function updateFormLanguage(lang) {
    const nameInput = document.getElementById('formName');
    const phoneInput = document.getElementById('formPhone');
    const emailInput = document.getElementById('formEmail');
    const messageInput = document.getElementById('formMessage');

    if (nameInput) nameInput.placeholder = lang === 'te' ? "మీ పూర్తి పేరు వ్రాయండి" : "Enter your full name";
    if (phoneInput) phoneInput.placeholder = lang === 'te' ? "10 అంకెల మొబైల్ నంబర్" : "10-digit mobile number";
    if (emailInput) emailInput.placeholder = lang === 'te' ? "మీ ఈమెయిల్ (ఉంటే)" : "name@example.com";
    if (messageInput) messageInput.placeholder = lang === 'te' ? "మీ ప్రాంత సమస్య లేదా మీరు ఏ విధంగా పాల్గొనాలనుకుంటున్నారో తెలపండి..." : "Describe your area issue or how you would like to participate...";
  }

  /* ==========================================================================
     4. TREE METAPHOR INTERACTION
     ========================================================================== */

  function renderTreePanel(partKey) {
    activeTreePart = partKey;
    const node = treeNodes[partKey];
    if (!node) return;

    const data = node[currentLang];
    if (elements.treePanelKicker) elements.treePanelKicker.textContent = data.kicker;
    if (elements.treePanelTitle) elements.treePanelTitle.textContent = data.title;
    if (elements.treePanelDesc) elements.treePanelDesc.textContent = data.desc;

    if (elements.treePanelPoints) {
      elements.treePanelPoints.innerHTML = '';
      data.points.forEach((pt, idx) => {
        const li = document.createElement('li');
        li.className = 'tree-panel-point-item';
        li.innerHTML = `
          <span class="tree-point-bullet" aria-hidden="true">${idx + 1}</span>
          <span>${pt}</span>
        `;
        elements.treePanelPoints.appendChild(li);
      });
    }

    // Update active tab buttons
    elements.treeTabs.forEach(btn => {
      const target = btn.getAttribute('data-tree-part');
      if (target === partKey) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });

    // Update active markers in SVG
    elements.treeNodes.forEach(marker => {
      const target = marker.getAttribute('data-node');
      if (target === partKey) {
        marker.classList.add('active');
      } else {
        marker.classList.remove('active');
      }
    });
  }

  /* ==========================================================================
     5. CONSTITUENCY & MANDALS CONTROLLER
     ========================================================================== */

  function renderMandalDetails(mandalId) {
    activeMandal = mandalId;
    const item = mandalsData[mandalId];
    if (!item) return;

    const name = currentLang === 'te' ? item.nameTe : item.nameEn;
    const profile = currentLang === 'te' ? item.profileTe : item.profileEn;
    const focusAreas = currentLang === 'te' ? item.focusAreasTe : item.focusAreasEn;

    if (elements.mandalTitle) elements.mandalTitle.textContent = name;
    if (elements.mandalDesc) elements.mandalDesc.textContent = profile;
    if (elements.mandalHqVal) elements.mandalHqVal.textContent = item.headquarters;
    if (elements.mandalNodeVal) elements.mandalNodeVal.textContent = item.partyNode;

    if (elements.mandalFocusList) {
      elements.mandalFocusList.innerHTML = '';
      focusAreas.forEach(area => {
        const div = document.createElement('div');
        div.className = 'mandal-focus-item';
        div.textContent = area;
        elements.mandalFocusList.appendChild(div);
      });
    }

    elements.mandalTabs.forEach(tab => {
      const id = tab.getAttribute('data-mandal');
      if (id === mandalId) {
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
      } else {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
      }
    });
  }

  /* ==========================================================================
     6. ACTIVITIES / UPDATES FEED & FILTER
     ========================================================================== */

  function renderUpdates(filter) {
    activeUpdatesFilter = filter;
    if (!elements.updatesContainer) return;

    elements.updatesContainer.innerHTML = '';

    const filtered = filter === 'all'
      ? updatesData
      : updatesData.filter(item => item.category === filter);

    filtered.forEach(item => {
      const card = document.createElement('article');
      card.className = 'update-card';

      const catName = currentLang === 'te' ? item.categoryNameTe : item.categoryNameEn;
      const dateText = currentLang === 'te' ? item.dateTe : item.dateEn;
      const title = currentLang === 'te' ? item.titleTe : item.titleEn;
      const excerpt = currentLang === 'te' ? item.excerptTe : item.excerptEn;
      const btnText = translations[currentLang].btn_read_update;

      card.innerHTML = `
        <div class="update-card-media">
          <img src="${item.image}" alt="${title}" class="update-card-img" loading="lazy" />
          <span class="update-category-pill">${catName}</span>
        </div>
        <div class="update-card-body">
          <span class="update-date">${dateText}</span>
          <h3 class="update-title">${title}</h3>
          <p class="update-excerpt">${excerpt}</p>
          <button type="button" class="update-read-btn" data-update-id="${item.id}">
            ${btnText} &rarr;
          </button>
        </div>
      `;

      // Read details click listener
      const readBtn = card.querySelector('.update-read-btn');
      if (readBtn) {
        readBtn.addEventListener('click', () => openUpdateModal(item));
      }

      elements.updatesContainer.appendChild(card);
    });

    elements.updatesFilterBtns.forEach(btn => {
      const f = btn.getAttribute('data-filter');
      if (f === filter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function openUpdateModal(item) {
    if (!elements.updateDetailModal) return;

    const catName = currentLang === 'te' ? item.categoryNameTe : item.categoryNameEn;
    const dateText = currentLang === 'te' ? item.dateTe : item.dateEn;
    const title = currentLang === 'te' ? item.titleTe : item.titleEn;
    const bodyText = currentLang === 'te' ? item.bodyTe : item.bodyEn;

    if (elements.updateModalTitle) elements.updateModalTitle.textContent = title;
    if (elements.updateModalMeta) elements.updateModalMeta.textContent = `${catName} • ${dateText}`;
    if (elements.updateModalBody) {
      elements.updateModalBody.innerHTML = `
        <div style="margin-bottom: 20px; border-radius: 8px; overflow: hidden;">
          <img src="${item.image}" alt="${title}" style="width: 100%; height: 260px; object-fit: cover;" />
        </div>
        <p style="font-size: 1.05rem; line-height: 1.8;">${bodyText}</p>
        <div class="inst-badge" style="margin-top: 20px;">
          <span>Official Secretariat Release • Deverakonda</span>
        </div>
      `;
    }

    elements.updateDetailModal.classList.add('open');
    elements.updateDetailModal.setAttribute('aria-hidden', 'false');
  }

  /* ==========================================================================
     7. RESPONSIVE MASONRY GALLERY & LIGHTBOX
     ========================================================================== */

  function renderGallery() {
    if (!elements.galleryContainer) return;
    elements.galleryContainer.innerHTML = '';

    galleryData.forEach((item, index) => {
      const figure = document.createElement('figure');
      figure.className = `gallery-item ${item.span2 ? 'span-2' : ''}`;
      figure.setAttribute('tabindex', '0');
      figure.setAttribute('role', 'button');
      figure.setAttribute('aria-label', `View ${item.captionEn}`);

      const caption = currentLang === 'te' ? item.captionTe : item.captionEn;
      const category = currentLang === 'te' ? item.categoryTe : item.categoryEn;

      figure.innerHTML = `
        <img src="${item.image}" alt="${caption}" class="gallery-img" loading="lazy" />
        <div class="gallery-overlay">
          <span class="gallery-meta">${category}</span>
          <h4 class="gallery-title">${caption}</h4>
        </div>
      `;

      figure.addEventListener('click', () => openLightbox(index));
      figure.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });

      elements.galleryContainer.appendChild(figure);
    });
  }

  function openLightbox(index) {
    if (!elements.lightboxModal) return;
    lightboxCurrentIndex = index;
    updateLightboxContent();
    elements.lightboxModal.classList.add('open');
    elements.lightboxModal.setAttribute('aria-hidden', 'false');
    if (elements.lightboxClose) elements.lightboxClose.focus();
  }

  function updateLightboxContent() {
    const item = galleryData[lightboxCurrentIndex];
    if (!item) return;

    const caption = currentLang === 'te' ? item.captionTe : item.captionEn;
    if (elements.lightboxImg) {
      elements.lightboxImg.src = item.image;
      elements.lightboxImg.alt = caption;
    }
    if (elements.lightboxCaption) {
      elements.lightboxCaption.textContent = `${caption} (${lightboxCurrentIndex + 1} / ${galleryData.length})`;
    }
  }

  function closeLightbox() {
    if (!elements.lightboxModal) return;
    elements.lightboxModal.classList.remove('open');
    elements.lightboxModal.setAttribute('aria-hidden', 'true');
  }

  function prevLightbox() {
    lightboxCurrentIndex = (lightboxCurrentIndex - 1 + galleryData.length) % galleryData.length;
    updateLightboxContent();
  }

  function nextLightbox() {
    lightboxCurrentIndex = (lightboxCurrentIndex + 1) % galleryData.length;
    updateLightboxContent();
  }

  /* ==========================================================================
     8. OBJECTIVES DETAILS MODAL
     ========================================================================== */

  function openObjectiveModal(objKey) {
    if (!elements.objectiveModal) return;
    const data = objectiveDetails[objKey];
    if (!data) return;

    const title = currentLang === 'te' ? data.titleTe : data.titleEn;
    const desc = currentLang === 'te' ? data.descTe : data.descEn;
    const items = currentLang === 'te' ? data.itemsTe : data.itemsEn;

    if (elements.objectiveModalTitle) elements.objectiveModalTitle.textContent = title;
    if (elements.objectiveModalBody) {
      let listHtml = items.map(item => `
        <li style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px; font-size: 0.95rem;">
          <span style="color: var(--green); font-size: 1.2rem; line-height: 1;">✔</span>
          <span>${item}</span>
        </li>
      `).join('');

      elements.objectiveModalBody.innerHTML = `
        <p style="font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px; color: var(--text);">${desc}</p>
        <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--green-dark); margin-bottom: 14px;">
          ${currentLang === 'te' ? "నిర్దిష్ట కార్యాచరణ అంశాలు:" : "Key Actionable Focus Areas:"}
        </h4>
        <ul style="list-style: none; padding: 0;">${listHtml}</ul>
        <div class="inst-badge" style="margin-top: 24px;">
          <span>${currentLang === 'te' ? "అధికారిక నియోజకవర్గ ప్రణాళిక" : "Constituency Stated Policy Framework"}</span>
        </div>
      `;
    }

    elements.objectiveModal.classList.add('open');
    elements.objectiveModal.setAttribute('aria-hidden', 'false');
  }

  /* ==========================================================================
     9. LEGAL & PRIVACY MODAL
     ========================================================================== */

  function openGenericModal(type) {
    if (!elements.genericModal) return;

    let title = "";
    let content = "";

    if (type === 'privacy') {
      title = currentLang === 'te' ? "గోప్యతా విధానం (Privacy Policy)" : "Privacy Policy";
      content = `
        <p><strong>Sarva Samrudhhi Independent Party</strong> operates this official public information portal in Deverakonda Constituency, Nalgonda District, Telangana.</p>
        <h4>Data Collection & Transparency</h4>
        <p>We respect citizen privacy. Any information submitted via our 'Get Involved' form (such as your name, contact phone number, and area of residence) is gathered solely for genuine constituent communication, local consultation, and public meeting notifications.</p>
        <h4>No Commercial Exploitation</h4>
        <p>We do not sell, rent, commercialize, or transfer personal information to commercial advertising companies or third-party marketing brokers.</p>
        <h4>Security</h4>
        <p>All transmitted information is handled securely by the Party Central Secretariat. Citizens may request deletion or amendment of their records at any time by contacting contact@sarvasamrudhhi.org.</p>
      `;
    } else if (type === 'terms') {
      title = currentLang === 'te' ? "నిబంధనలు & షరతులు (Terms of Use)" : "Terms of Use";
      content = `
        <p>This website is the official institutional communications portal of Sarva Samrudhhi Independent Party for Deverakonda Constituency.</p>
        <h4>Permitted Use</h4>
        <p>Citizens and media representatives may read, download, and quote official public statements, circulars, and vision documents with accurate attribution.</p>
        <h4>Prohibited Conduct</h4>
        <p>No entity is permitted to alter, falsify, or publish unauthorized representations in the name of the party or solicit unauthorized funds using party logos or identity assets.</p>
      `;
    } else if (type === 'accessibility') {
      title = currentLang === 'te' ? "యాక్సెసిబిలిటీ స్టేట్‌మెంట్ (Accessibility)" : "Accessibility Statement";
      content = `
        <p>Sarva Samrudhhi Independent Party is dedicated to digital inclusivity. Our portal is architected to meet WCAG 2.1 AA international accessibility guidelines.</p>
        <h4>Key Features</h4>
        <p>• High-contrast color palette exceeding 4.5:1 ratio for text readability.<br>
        • Bilingual support in English and Telugu typography.<br>
        • Full keyboard navigability and visible focus outlines.<br>
        • Compatibility with screen readers and reduced-motion user preferences.</p>
      `;
    }

    if (elements.genericModalTitle) elements.genericModalTitle.textContent = title;
    if (elements.genericModalBody) elements.genericModalBody.innerHTML = content;

    elements.genericModal.classList.add('open');
    elements.genericModal.setAttribute('aria-hidden', 'false');
  }

  function closeAllModals() {
    document.querySelectorAll('.info-modal, .lightbox-modal').forEach(modal => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    });
  }

  /* ==========================================================================
     10. GET INVOLVED / PARTICIPATION FORM
     ========================================================================== */

  function initInvolvementForm() {
    if (!elements.involvementForm) return;

    elements.involvementForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('formName').value.trim();
  const phone = document.getElementById('formPhone').value.trim();
  const email = document.getElementById('formEmail')?.value.trim() || '';
  const mandal = document.getElementById('formMandal').value;
  const category = document.getElementById('formCategory').value;
  const message = document.getElementById('formMessage').value.trim();
  const consent = document.getElementById('formConsent').checked;

  // Validation
  if (!name || !phone || !mandal || !category || !message || !consent) {
    showFormAlert(
      'error',
      translations[currentLang].form_error_msg
    );
    return;
  }

  // Validate Indian mobile number
  const phoneDigits = phone.replace(/[^0-9]/g, '');

  if (phoneDigits.length !== 10) {
    showFormAlert(
      'error',
      currentLang === 'te'
        ? 'దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి.'
        : 'Please enter a valid 10-digit mobile number.'
    );
    return;
  }

  const submitBtn =
    elements.involvementForm.querySelector('button[type="submit"]');

  const originalText = submitBtn.textContent;

  submitBtn.textContent =
    translations[currentLang].form_submitting;

  submitBtn.disabled = true;

  try {
    const response = await fetch(
      'https://sarva-samruddhi-api.onrender.com/api/submissions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          mobile: phoneDigits,
          email: email,
          mandal: mandal,
          participationType: category,
          message: message,
          consent: consent
        })
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(
        data.message || 'Submission failed'
      );
    }

    // Successful submission
    showFormAlert(
      'success',
      `${translations[currentLang].form_success_msg}${data.referenceId}`
    );

    // Clear form
    elements.involvementForm.reset();

  } catch (error) {
    console.error('Submission error:', error);

    showFormAlert(
      'error',
      currentLang === 'te'
        ? 'సమర్పణ విఫలమైంది. దయచేసి కొంత సమయం తర్వాత మళ్లీ ప్రయత్నించండి.'
        : 'Unable to submit your request right now. Please try again later.'
    );

  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});
  }

  function showFormAlert(type, message) {
    if (!elements.formStatusAlert) return;
    elements.formStatusAlert.className = `form-status-alert ${type}`;
    elements.formStatusAlert.textContent = message;
    elements.formStatusAlert.style.display = 'block';
  }

  /* ==========================================================================
     11. SCROLL & NAVIGATION CONTROLLERS
     ========================================================================== */

  function initScrollBehavior() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        elements.header?.classList.add('scrolled');
      } else {
        elements.header?.classList.remove('scrolled');
      }
    }, { passive: true });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          elements.navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(sec => observer.observe(sec));
  }

  /* Mobile Drawer */
  function openDrawer() {
    elements.mobileDrawer?.classList.add('open');
    elements.drawerBackdrop?.classList.add('open');
    elements.mobileMenuBtn?.setAttribute('aria-expanded', 'true');
    elements.drawerCloseBtn?.focus();
  }

  function closeDrawer() {
    elements.mobileDrawer?.classList.remove('open');
    elements.drawerBackdrop?.classList.remove('open');
    elements.mobileMenuBtn?.setAttribute('aria-expanded', 'false');
  }

  /* ==========================================================================
     12. EVENT LISTENERS SETUP
     ========================================================================== */

  function initEventListeners() {
    // Language Switcher Buttons
    elements.langToggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const nextLang = currentLang === 'en' ? 'te' : 'en';
        setLanguage(nextLang);
      });
    });

    // Mobile Menu Toggle
    elements.mobileMenuBtn?.addEventListener('click', openDrawer);
    elements.drawerCloseBtn?.addEventListener('click', closeDrawer);
    elements.drawerBackdrop?.addEventListener('click', closeDrawer);
    elements.drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    // Tree Metaphor Tabs
    elements.treeTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const part = tab.getAttribute('data-tree-part');
        renderTreePanel(part);
      });
    });

    // Tree SVG Markers
    elements.treeNodes.forEach(node => {
      node.addEventListener('click', () => {
        const part = node.getAttribute('data-node');
        renderTreePanel(part);
      });
    });

    // Mandal Tabs
    elements.mandalTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const id = tab.getAttribute('data-mandal');
        renderMandalDetails(id);
      });
    });

    // Updates Filter Buttons
    elements.updatesFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const f = btn.getAttribute('data-filter');
        renderUpdates(f);
      });
    });

    // Objectives "Learn More" Cards
    elements.objectiveCards.forEach(card => {
      const btn = card.querySelector('.objective-learn-more-btn');
      const objKey = card.getAttribute('data-objective');
      if (btn && objKey) {
        btn.addEventListener('click', () => openObjectiveModal(objKey));
      }
    });

    // Modal Close Buttons
    elements.objectiveModalClose?.addEventListener('click', closeAllModals);
    elements.updateModalClose?.addEventListener('click', closeAllModals);
    elements.genericModalClose?.addEventListener('click', closeAllModals);

    // Lightbox Controls
    elements.lightboxClose?.addEventListener('click', closeLightbox);
    elements.lightboxPrev?.addEventListener('click', prevLightbox);
    elements.lightboxNext?.addEventListener('click', nextLightbox);

    // Overlay backdrop clicks to close
    document.querySelectorAll('.info-modal, .lightbox-modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeAllModals();
        }
      });
    });

    // Keyboard Shortcuts (Escape to close modals, Arrow keys for lightbox)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllModals();
        closeDrawer();
      }
      if (elements.lightboxModal?.classList.contains('open')) {
        if (e.key === 'ArrowLeft') prevLightbox();
        if (e.key === 'ArrowRight') nextLightbox();
      }
    });

    // Footer Legal Modals
    document.querySelectorAll('.footer-legal-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-modal-type');
        openGenericModal(type);
      });
    });
  }

  /* ==========================================================================
     13. INITIALIZATION
     ========================================================================== */

  function init() {
    // Detect saved language or browser preference
    let savedLang = 'en';
    try {
      const stored = localStorage.getItem('ssip_lang');
      if (stored === 'en' || stored === 'te') {
        savedLang = stored;
      }
    } catch (e) {}

    initScrollBehavior();
    initEventListeners();
    initInvolvementForm();
    setLanguage(savedLang);
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
