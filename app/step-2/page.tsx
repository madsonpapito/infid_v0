"use client"

import { useState, useRef, useEffect, useCallback, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import {
  CheckCircle2, AlertTriangle, Lock, LockOpen, Search, MapPin,
  Smartphone, Fingerprint, Eye, User, HeartCrack, Activity,
  ScanFace, Globe, ShieldCheck, ChevronRight, X, MessageCircle,
  ChevronLeft, Volume2, HelpCircle
} from "lucide-react"
import { getRandomProfile, MALE_NAMES, FEMALE_NAMES } from "@/lib/profile-data"
import { COUNTRIES } from "@/components/Countries"


// ==========================================================
// DATA MOCKS
// ==========================================================

const matchesData = [
  { name: "Mila", age: 26, lastSeen: "6h ago", avatar: "/images/male/tinder/5.jpg", verified: true, identity: "Bisexual", distance: "2 km", bio: "Good vibes only.", zodiac: "Virgo", interests: ["Hiking", "Music"] },
  { name: "John", age: 25, lastSeen: "4h ago", avatar: "/images/female/tinder/5.jpg", verified: true, identity: "Bisexual", distance: "2 km", bio: "Adrenaline junkie.", zodiac: "Leo", interests: ["Fitness", "Books"] },
  { name: "Harper", age: 21, lastSeen: "3h ago", avatar: "/images/male/tinder/3.jpg", verified: false, identity: "Woman", distance: "5 km", bio: "Sunsets and wine.", zodiac: "Leo", interests: ["Travel", "Photo"] },
  { name: "Will", age: 23, lastSeen: "2h ago", avatar: "/images/female/tinder/3.jpg", verified: true, identity: "Man", distance: "8 km", bio: "Sarcasm fluent.", zodiac: "Gemini", interests: ["Movies", "Dogs"] },
  { name: "Luna", age: 24, lastSeen: "5h ago", avatar: "/images/male/tinder/6.jpg", verified: false, identity: "Woman", distance: "4 km", bio: "Stargazer.", zodiac: "Pisces", interests: ["Space", "Art"] },
  { name: "Alex", age: 28, lastSeen: "Online", avatar: "/images/female/tinder/6.jpg", verified: true, identity: "Man", distance: "3 km", bio: "Chef & Adventurer.", zodiac: "Scorpio", interests: ["Food", "Hiking"] }
]

const photosList = ["/images/censored/photo1.jpg", "/images/censored/photo2.jpg", "/images/censored/photo3.jpg", "/images/censored/photo4.jpg"]

// ==========================================================

function DatingScannerContent() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('q')
  const [step, setStep] = useState(1)

  // Inputs
  const [selectedGender, setSelectedGender] = useState<string | null>(null)
  const [ageRange, setAgeRange] = useState<string | null>(null)
  const [relationshipStatus, setRelationshipStatus] = useState<string | null>(null)
  const [suspicionLevel, setSuspicionLevel] = useState<string | null>(null)
  const [redFlags, setRedFlags] = useState<string[]>([])
  const [imageUploaded, setImageUploaded] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | undefined>(undefined)

  // States
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [scanPhase, setScanPhase] = useState(0)
  const [location, setLocation] = useState("Unknown Location")
  const [timeLeft, setTimeLeft] = useState(5 * 60)
  const [selectedMatch, setSelectedMatch] = useState<any | null>(null)
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  const testimonials = [
    {
      name: "Jessica, 31",
      location: "Orlando, FL",
      text: "I honestly didn't think it would work, but the report pulled up deleted chats that explained everything. It felt like the missing piece.",
      video: "https://play.tynk.ai/p/55c0525d-8354-4cd6-a98f-34a31df5b1aa"
    },
    {
      name: "Amanda, 44",
      location: "Dallas, TX",
      text: "I was nervous, but within minutes it showed hidden messages and even voice notes. That was the confirmation I needed.",
      video: "https://play.tynk.ai/p/d04e1286-c92c-4f39-a679-2ce4b742cd59"
    },
    {
      name: "Daniel, 38",
      location: "Fresno, CA",
      text: "It's not guesses or random alerts… it's actual proof. I saw the screenshots myself. It's worth it.",
      video: "https://play.tynk.ai/p/ac310c50-c224-4c0f-bdc0-ebf311ef7afa"
    }
  ]

  // Dynamic Matches State
  const [randomMatches, setRandomMatches] = useState<any[]>([])

  useEffect(() => {
    // Fetch user location silently
    fetch('/api/geo')
      .then(res => res.json())
      .then(data => {
        if (data.city && data.city !== 'Unknown Location') {
          setLocation(data.city)
        } else {
          // Fallback to external service if internal fails
          fetch('https://get.geojs.io/v1/ip/geo.json')
            .then(res => res.json())
            .then(geo => {
              if (geo.city) setLocation(geo.city)
            })
            .catch(e => console.error("Fallback geo error:", e))
        }
      })
      .catch(err => {
        console.error("Geo fetch error:", err)
        // Fallback on error
        fetch('https://get.geojs.io/v1/ip/geo.json')
          .then(res => res.json())
          .then(geo => {
            if (geo.city) setLocation(geo.city)
          })
          .catch(e => console.error("Fallback geo error:", e))
      })
  }, [])

  useEffect(() => {
    // Generate matches when component mounts or step changes to 3 (Results)
    // Matches should be opposite gender of the target (suspect)
    if (step === 3 && selectedGender) {
      const targetGender = selectedGender === 'female' ? 'male' : 'female';
      const namesList = targetGender === 'male' ? MALE_NAMES : FEMALE_NAMES;
      // Shuffle names to ensure randomness but uniqueness in the slice
      const shuffledNames = [...namesList].sort(() => 0.5 - Math.random());

      const newMatches = Array.from({ length: 6 }).map((_, i) => getRandomProfile(targetGender, i, shuffledNames[i]));
      setRandomMatches(newMatches);
    }
  }, [step, selectedGender])

  const checkoutRef = useRef<HTMLDivElement>(null)


  const scrollToCheckout = useCallback(() => {
    checkoutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])

  useEffect(() => {
    fetch("/api/location")
      .then((res) => res.json())
      .then((data) => {
        if (data.city) setLocation(data.city)
      })
      .catch(() => setLocation("New York, US"))
  }, [])

  useEffect(() => {
    if (step === 3 && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000)
      return () => clearInterval(timer)
    }
  }, [step, timeLeft])

  const formatTime = (seconds: number) => {
    if (seconds <= 0) return "00:00"
    const m = Math.floor(seconds / 60).toString().padStart(2, "0")
    const s = (seconds % 60).toString().padStart(2, "0")
    return `${m}:${s}`
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (ev) => {
        setImagePreview(ev.target?.result as string)
        setImageUploaded(true)
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const startInvestigation = () => {
    setStep(2)



    // Save analytics
    fetch('/api/survey-responses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ gender: selectedGender, ageRange, relationshipStatus, suspicionLevel, redFlags })
    }).catch(err => console.log('Survey save error', err))



    // Loading Simulation
    const scanSteps = [1, 2, 3, 4, 5]
    scanSteps.forEach((phase, i) => {
      setTimeout(() => {
        setScanPhase(phase)
        setLoadingProgress(((i + 1) / scanSteps.length) * 85)
      }, (i + 1) * 1500)
    })

    setTimeout(() => {
      setScanPhase(6) // Intermediate results
      setLoadingProgress(100)
    }, 7000)

    setTimeout(() => {
      setStep(3)
      setScanPhase(0)
    }, 10000)
  }

  const toggleRedFlag = (flag: string) => {
    setRedFlags(prev => prev.includes(flag) ? prev.filter(f => f !== flag) : [...prev, flag])
  }

  // Multi-Input States
  // --- COUNTRY DATA IMPORTED ---

  // Multi-Input States
  const [activeInputTab, setActiveInputTab] = useState<'photo' | 'instagram' | 'whatsapp'>('instagram')
  const [instagramUsername, setInstagramUsername] = useState('')
  const [whatsappNumber, setWhatsappNumber] = useState('')
  const [countrySearch, setCountrySearch] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]) // Default to USA
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const [isFetchingProfile, setIsFetchingProfile] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [instagramFeed, setInstagramFeed] = useState<any[]>([])

  const checkProfile = async (type: 'instagram' | 'whatsapp', value: string) => {
    setErrorMessage(null);
    let cleanValue = value.trim();

    if (type === 'instagram') {
      cleanValue = cleanValue.replace('@', '');
      setInstagramUsername(cleanValue);
      if (cleanValue.length < 3) return;
    } else {
      // WhatsApp validation
      if (cleanValue.replace(/\D/g, '').length < 6) return;
    }

    setIsFetchingProfile(true);

    try {
      if (type === 'instagram') {
        // ... Existing Instagram Logic ...
        const res = await fetch('/api/instagram/profile', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: cleanValue })
        });

        if (res.ok) {
          const data = await res.json();
          if (data.success && data.profile) {
            if (data.profile.profile_pic_url) {
              setImagePreview(data.profile.profile_pic_url);
              setImageUploaded(true);
            } else {
              setErrorMessage("Profile found but private/no photo accessible.");
            }

            // Fetch feed for Instagram Scanner
            try {
              const postsRes = await fetch('/api/instagram/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: cleanValue })
              });
              if (postsRes.ok) {
                const postsData = await postsRes.json();
                if (postsData.success && postsData.posts) {
                  setInstagramFeed(postsData.posts);
                }
              }
            } catch (err) {
              console.error("Feed fetch error", err);
            }
          } else {
            setErrorMessage(data.error || "Profile picture not found.");
          }
        } else {
          setErrorMessage("Could not verify profile. Please check the username.");
        }
      } else {

        // WhatsApp Logic - CALLING RESTORED API
        const fullNumber = cleanValue.replace(/\D/g, ''); // User input cleaned

        const res = await fetch('/api/whatsapp-photo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            phone: fullNumber,
            countryCode: selectedCountry.code
          })
        });

        const data = await res.json();

        if (res.ok && (data.result || data.imageUrl)) {
          const imgUrl = data.result || data.imageUrl;
          setImagePreview(imgUrl);
          setImageUploaded(true);
        } else {
          // Fallback handled by API mostly, but if fails:
          console.error("WhatsApp API Error:", data);
          setErrorMessage("Could not retrieve WhatsApp profile photo. Please verify the number.");
        }
      }

    } catch (error) {
      console.error("Profile fetch error", error);
      setErrorMessage("Connection error. Please try again.");
    } finally {
      setIsFetchingProfile(false);
    }
  }

  // --- AUTO-FETCH EFFECT ---
  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeInputTab === 'instagram' && instagramUsername.length > 3) {
        checkProfile('instagram', instagramUsername);
      } else if (activeInputTab === 'whatsapp' && whatsappNumber.length > 5) {
        checkProfile('whatsapp', whatsappNumber);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [instagramUsername, whatsappNumber, activeInputTab]);

  const isFormComplete = selectedGender && ageRange && relationshipStatus && suspicionLevel && redFlags.length > 0 && (imageUploaded || (activeInputTab === 'instagram' && instagramUsername.length > 2) || (activeInputTab === 'whatsapp' && whatsappNumber.length > 5))

  // --------------------------------------------------------
  // STEP 1: INPUT (DARK MODE)
  // --------------------------------------------------------
  const renderInputStep = () => (
    <div className="space-y-6 animate-fade-in w-full max-w-lg mx-auto pb-32 px-4">

      {/* Header */}
      {searchQuery && (
        <div className="mb-6 bg-cyan-500/10 border border-cyan-500/30 p-3 rounded-lg flex items-center gap-3 animate-pulse">
          <Search className="w-5 h-5 text-cyan-400" />
          <p className="text-sm text-cyan-200">
            Continuing scan for: <span className="font-bold text-white uppercase">{searchQuery}</span>
          </p>
        </div>
      )}

      <div className="text-center space-y-4 mb-8">
        <div className="inline-flex items-center justify-center p-4 bg-cyan-500/10 rounded-full border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <Search className="w-8 h-8 text-cyan-400" />
        </div>
        <h1 className="text-2xl font-bold text-white uppercase tracking-tight">Initiate Search</h1>
        <p className="text-slate-400 text-sm max-w-xs mx-auto">
          Configure search parameters to scan 50+ dating networks anonymously.
        </p>
      </div>

      {/* 1. Gender */}
      <div className="bg-[#0f172a] rounded-xl border border-slate-700 p-5 space-y-4">
        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <User className="w-4 h-4" /> Target Gender
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {['male', 'female'].map(g => (
            <button
              key={g}
              onClick={() => setSelectedGender(g)}
              className={`p-3 rounded-lg border transition-all flex flex-col items-center gap-1 ${selectedGender === g
                ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                : 'bg-slate-800 border-slate-700 text-slate-500 hover:border-slate-600'
                }`}
            >
              <span className="text-xl">{g === 'male' ? '👨' : '👩'}</span>
              <span className="text-[10px] font-bold uppercase">{g.replace('-', ' ')}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Age */}
      <div className="bg-[#0f172a] rounded-xl border border-slate-700 p-5 space-y-4">
        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <Activity className="w-4 h-4" /> Target Age
        </h2>
        <div className="grid grid-cols-4 gap-2">
          {['18-24', '25-34', '35-44', '45+'].map(val => (
            <button
              key={val}
              onClick={() => setAgeRange(val)}
              className={`py-2 rounded-lg border text-xs font-bold transition-all ${ageRange === val
                ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400'
                : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
            >
              {val}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Relationship */}
      <div className="bg-[#0f172a] rounded-xl border border-slate-700 p-5 space-y-4">
        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <HeartCrack className="w-4 h-4" /> Status
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { v: 'married', l: 'Married' }, { v: 'relationship', l: 'Relationship' },
            { v: 'complicated', l: 'Complicated' }, { v: 'dating', l: 'Dating' }
          ].map(o => (
            <button
              key={o.v}
              onClick={() => setRelationshipStatus(o.v)}
              className={`p-3 text-left rounded-lg border text-xs font-bold transition-all ${relationshipStatus === o.v
                ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400'
                : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
            >
              {o.l}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Suspicion */}
      <div className="bg-[#0f172a] rounded-xl border border-slate-700 p-5 space-y-4">
        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" /> Suspicion Level
        </h2>
        <div className="space-y-2">
          {[
            { v: 'certain', l: "I'm almost certain" },
            { v: 'gut', l: "I have a gut feeling" },
            { v: 'unsure', l: "Not sure, just checking" }
          ].map(o => (
            <button
              key={o.v}
              onClick={() => setSuspicionLevel(o.v)}
              className={`w-full p-3 text-left rounded-lg border text-xs font-medium transition-all ${suspicionLevel === o.v
                ? 'bg-rose-500/10 border-rose-500 text-rose-400'
                : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
            >
              {o.l}
            </button>
          ))}
        </div>
      </div>

      {/* 5. Red Flags */}
      <div className="bg-[#0f172a] rounded-xl border border-slate-700 p-5 space-y-4">
        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" /> Detected Signs
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {[
            { v: 'hide_phone', l: 'Hides Phone' }, { v: 'changed_passwords', l: 'New Passwords' },
            { v: 'late_nights', l: 'Late Nights' }, { v: 'deleting_messages', l: 'Deleting Msgs' },
            { v: 'distant', l: 'Distant' }, { v: 'appearance', l: 'New Look' }
          ].map(o => (
            <button
              key={o.v}
              onClick={() => toggleRedFlag(o.v)}
              className={`p-2 text-center rounded border text-[10px] uppercase font-bold transition-all ${redFlags.includes(o.v)
                ? 'bg-rose-500/10 border-rose-500 text-rose-400'
                : 'bg-slate-800 border-slate-700 text-slate-500'
                }`}
            >
              {o.l}
            </button>
          ))}
        </div>
      </div>

      {/* 6. Identification Method (Required) */}
      <div className="bg-[#0f172a] rounded-xl border border-slate-700 p-5 space-y-4">
        <label className="text-sm font-bold text-slate-400 flex items-center gap-2 uppercase tracking-wide">
          <ScanFace className="w-4 h-4 text-cyan-500" /> Identify Subject (Required)
        </label>
        <p className="text-[14px] text-slate-500 -mt-2">
          Provide at least one of the options below so we can start the investigation.
        </p>

        {/* Tabs */}
        <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
          <button onClick={() => { setActiveInputTab('instagram'); setErrorMessage(null); }} className={`flex-1 py-2 text-[10px] font-bold uppercase rounded-md transition-all ${activeInputTab === 'instagram' ? 'bg-slate-700 text-white shadow' : 'text-slate-500 hover:text-slate-300'}`}>Instagram</button>
          <button onClick={() => { setActiveInputTab('photo'); setErrorMessage(null); }} className={`flex-1 py-2 text-[10px] font-bold uppercase rounded-md transition-all ${activeInputTab === 'photo' ? 'bg-slate-700 text-white shadow' : 'text-slate-500 hover:text-slate-300'}`}>Photo Upload</button>
          <button onClick={() => { setActiveInputTab('whatsapp'); setErrorMessage(null); }} className={`flex-1 py-2 text-[10px] font-bold uppercase rounded-md transition-all ${activeInputTab === 'whatsapp' ? 'bg-emerald-900/30 text-emerald-400 border border-emerald-500/30 shadow' : 'text-slate-500 hover:text-slate-300'}`}>WhatsApp</button>
        </div>

        {/* Content Area */}
        <div className="min-h-[120px] flex flex-col justify-center">

          {/* PHOTO UPLOAD */}
          {activeInputTab === 'photo' && (
            <label className="block w-full h-32 border-2 border-dashed border-slate-600 rounded-xl hover:border-cyan-500 hover:bg-cyan-500/5 transition-all cursor-pointer relative flex flex-col items-center justify-center gap-2 group">
              <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              {imagePreview && activeInputTab === 'photo' ? (
                <img src={imagePreview} className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-50" />
              ) : (
                <ScanFace className="w-8 h-8 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              )}
              <span className="text-xs text-slate-400 font-mono relative z-10 bg-slate-900/50 px-2 py-1 rounded">
                {imageUploaded ? "IMAGE UPLOADED" : "UPLOAD TARGET PHOTO"}
              </span>
            </label>
          )}

          {/* INSTAGRAM INPUT */}
          {activeInputTab === 'instagram' && (
            <div className="space-y-3">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-slate-500 font-bold">@</span>
                </div>
                <input
                  type="text"
                  className="w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full pl-8 p-3"
                  placeholder="username"
                  value={instagramUsername}
                  onChange={(e) => setInstagramUsername(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  {isFetchingProfile && <div className="w-4 h-4 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>}
                </div>
              </div>
            </div>
          )}

          {/* WHATSAPP INPUT WITH COUNTRY SELECTOR */}
          {activeInputTab === 'whatsapp' && (
            <div className="space-y-3 relative">
              <div className="flex bg-slate-900 rounded-lg border border-slate-700 focus-within:border-emerald-500 transition-colors">

                {/* Country Dropdown Trigger */}
                <button
                  type="button"
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  className="flex items-center gap-2 px-3 border-r border-slate-700 hover:bg-slate-800 transition-colors rounded-l-lg"
                >
                  <span className="text-xs font-bold text-white">{selectedCountry.iso || selectedCountry.name.substring(0, 2).toUpperCase()}</span>
                  <span className="text-xs font-mono text-slate-400">{selectedCountry.code}</span>
                </button>

                {/* Dropdown Menu */}
                {isCountryDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50 flex flex-col max-h-60">

                    {/* Search Input */}
                    <div className="p-2 sticky top-0 bg-slate-800 border-b border-slate-700 z-10">
                      <div className="relative">
                        <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
                        <input
                          type="text"
                          className="w-full bg-slate-900 border border-slate-700 rounded text-xs text-white pl-7 p-2 focus:border-cyan-500 outline-none"
                          placeholder="Search country..."
                          value={countrySearch}
                          onChange={(e) => setCountrySearch(e.target.value)}
                          autoFocus
                        />
                      </div>
                    </div>

                    {/* List */}
                    <div className="overflow-y-auto flex-1">
                      {COUNTRIES.filter(c =>
                        c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
                        c.code.includes(countrySearch) ||
                        (c.iso && c.iso.toLowerCase().includes(countrySearch.toLowerCase()))
                      ).map((c, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setSelectedCountry(c);
                            setIsCountryDropdownOpen(false);
                            setCountrySearch('');
                          }}
                          className="w-full flex items-center gap-3 p-2 hover:bg-slate-700 text-left transition-colors border-b border-slate-700/50 last:border-0"
                        >
                          <span className="text-sm font-bold text-white w-6 flex-shrink-0 text-center">{c.iso}</span>
                          <div>
                            <p className="text-xs text-white font-bold">{c.name}</p>
                            <p className="text-[10px] text-slate-400 font-mono">{c.code}</p>
                          </div>
                        </button>
                      ))}
                      {COUNTRIES.filter(c => c.name.toLowerCase().includes(countrySearch.toLowerCase())).length === 0 && (
                        <div className="p-4 text-center text-slate-500 text-xs">No countries found</div>
                      )}
                    </div>
                  </div>
                )}

                <input
                  type="tel"
                  className="flex-1 bg-transparent text-white text-sm p-3 outline-none placeholder-slate-600 font-mono"
                  placeholder={selectedCountry.placeholder}
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value.replace(/[^0-9]/g, ''))}
                />

                <div className="pr-3 flex items-center">
                  {isFetchingProfile && <div className="w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>}
                </div>
              </div>
              <p className="text-[10px] text-slate-500 text-center">
                Select country and enter number (without country code).
              </p>
            </div>
          )}
        </div>

        {/* PROFILE RESULT PREVIEW */}
        {imageUploaded && (
          <div className="mt-4 p-3 bg-[#0B1120] border border-cyan-500/30 rounded-lg flex items-center gap-3 animate-fade-in">
            <div className="relative">
              <img src={imagePreview!} alt="Profile" className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border border-black"></div>
            </div>
            <div>
              <h4 className="text-white text-sm font-bold flex items-center gap-2">
                {activeInputTab === 'whatsapp' ? 'Number Active' : 'Profile Found'}
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              </h4>
              <p className="text-[10px] text-emerald-400">
                {activeInputTab === 'whatsapp' ? 'WhatsApp profile verified' : 'Ready to scan'}
              </p>
            </div>
            <button
              onClick={() => { setImageUploaded(false); setImagePreview(undefined); setInstagramUsername(''); setWhatsappNumber(''); }}
              className="ml-auto text-slate-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* ERROR MESSAGE */}
        {errorMessage && (
          <div className="bg-rose-500/10 border border-rose-500/30 p-2 rounded text-[10px] text-rose-400 flex items-center gap-2 animate-in fade-in">
            <AlertTriangle className="w-3 h-3" />
            {errorMessage}
          </div>
        )}
      </div>

      {/* 7. Start Scan Button */}
      <button
        onClick={startInvestigation}
        disabled={!isFormComplete || isFetchingProfile}
        className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:opacity-50 disabled:grayscale transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
      >
        {isFetchingProfile ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> VERIFYING TARGET...
          </>
        ) : (
          <>
            RUN DEEP SCAN <ShieldCheck className="w-5 h-5" />
          </>
        )}
      </button>

      <div className="text-center">
        <p className="text-[10px] text-slate-500">
          By scanning, you agree to our Terms of Service. All data is encrypted locally.
        </p>
      </div>

    </div>
  )

  // --------------------------------------------------------
  // STEP 2: LOADING (DARK MODE)
  // --------------------------------------------------------
  const renderLoadingStep = () => {
    if (scanPhase === 6) {
      // Intermediate Results
      return (
        <div className="space-y-6 animate-fade-in text-center max-w-md mx-auto pt-10">
          <div className="w-20 h-20 mx-auto bg-rose-500/10 rounded-full border-2 border-rose-500 flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(244,63,94,0.3)]">
            <AlertTriangle className="w-10 h-10 text-rose-500" />
          </div>

          <h1 className="text-2xl font-bold text-white uppercase tracking-tight">Profiles Detected</h1>

          <div className="bg-[#0f172a] rounded-xl border border-rose-500/30 p-6 text-left space-y-4 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-rose-500"></div>

            <div className="flex items-center gap-3">
              <div className="bg-rose-500/20 p-2 rounded text-rose-500"><Globe className="w-5 h-5" /></div>
              <div>
                <h3 className="text-sm font-bold text-white">Active Activity Found</h3>
                <p className="text-xs text-rose-400">Linked to 3 major dating apps.</p>
              </div>
            </div>

            <div className="h-px bg-slate-700"></div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Last Active:</span>
                <span className="text-emerald-400 font-bold">18 mins ago</span>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>Location:</span>
                <span className="text-white font-mono">{location}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>Status:</span>
                <span className="text-emerald-400 font-bold animate-pulse">ONLINE</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-400 animate-pulse">Generating final dossier...</p>
        </div>
      )
    }

    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 px-4">
        {activeInputTab === 'instagram' ? (
          /* ---- INSTAGRAM SCAN VIEW ---- */
          <div className="w-full max-w-sm mx-auto space-y-6 animate-fade-in">
            {/* Profile Circle */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative">
                <div className="w-20 h-20 rounded-full p-[3px]" style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#0f172a]">
                    {imagePreview ? (
                      <img src={imagePreview} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                        <span className="text-2xl text-slate-400">{instagramUsername?.[0]?.toUpperCase() ?? '?'}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#0f172a] flex items-center justify-center border border-slate-700">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig-grad)" />
                    <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.5" fill="none" />
                    <circle cx="17" cy="7" r="1" fill="white" />
                    <defs>
                      <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#f09433" />
                        <stop offset="50%" stopColor="#e6283c" />
                        <stop offset="100%" stopColor="#bc1888" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-base">Analyzing Profile...</p>
                {instagramUsername && <p className="text-slate-400 text-sm">@{instagramUsername}</p>}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400 font-mono">
                  {scanPhase === 1 && "Accessing profile..."}
                  {scanPhase === 2 && "Running facial recognition..."}
                  {scanPhase === 3 && "Triangulating location..."}
                  {scanPhase === 4 && "Decrypting private logs..."}
                  {scanPhase === 5 && "Compiling evidence..."}
                  {scanPhase === 0 && "Bypassing security..."}
                </span>
                <span className="text-rose-400 font-bold">{Math.round(loadingProgress)}%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${loadingProgress}%`,
                    background: 'linear-gradient(to right, #f09433, #e6283c, #bc1888)'
                  }}
                />
              </div>
            </div>

            {/* Feed Grid */}
            <div className="grid grid-cols-3 gap-1 w-full">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-slate-800 rounded overflow-hidden relative"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {instagramFeed[i] ? (
                    <img 
                      src={instagramFeed[i].imageUrl} 
                      alt={`Feed ${i}`} 
                      className="w-full h-full object-cover animate-fade-in"
                      style={{ 
                        opacity: scanPhase >= Math.ceil((i + 1) / 3) ? 1 : 0.3,
                        filter: scanPhase >= Math.ceil((i + 1) / 3) ? 'none' : 'blur(2px)'
                      }}
                    />
                  ) : (
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 animate-pulse"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        opacity: scanPhase > i * 0.5 ? 0.4 : 1
                      }}
                    />
                  )}
                  {scanPhase >= Math.ceil((i + 1) / 3) && (
                    <div className="absolute inset-0 bg-slate-700/10 flex items-center justify-center">
                      {!instagramFeed[i] && <div className="w-4 h-4 border border-rose-500/40 rounded-sm" />}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ---- DEFAULT RADAR VIEW ---- */
          <>
            {/* Radar Animation */}
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 border border-slate-700 rounded-full"></div>
              <div className="absolute inset-[20%] border border-slate-700/50 rounded-full"></div>
              <div className="absolute inset-[40%] border border-slate-700/30 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 w-full h-1/2 bg-gradient-to-t from-cyan-500/20 to-transparent origin-top animate-radar-spin rounded-t-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_cyan]"></div>
            </div>

            <div className="text-center space-y-2">
              <h2 className="text-xl font-bold text-white uppercase tracking-widest">Scanning Deep Web</h2>
              <p className="text-cyan-400 font-mono text-sm">
                {scanPhase === 1 && "Accessing Tinder API..."}
                {scanPhase === 2 && "Running Facial Recognition..."}
                {scanPhase === 3 && "Triangulating GPS Data..."}
                {scanPhase === 4 && "Decrypting Private Logs..."}
                {scanPhase === 5 && "Compiling Evidence..."}
              </p>
            </div>

            {/* Steps */}
            <div className="w-full max-w-xs space-y-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className={`flex items-center gap-3 text-xs transition-colors ${scanPhase >= s ? 'text-emerald-400' : 'text-slate-600'}`}>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${scanPhase >= s ? 'bg-emerald-500/20 border-emerald-500' : 'border-slate-700'}`}>
                    {scanPhase >= s && <CheckCircle2 className="w-3 h-3" />}
                  </div>
                  <span className="uppercase font-bold tracking-wider">Protocol 0{s}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    )
  }

  // --------------------------------------------------------
  // STEP 3: RESULTS (DARK MODE)
  // --------------------------------------------------------
  const renderResultsStep = () => {
    const genderFolder = selectedGender === 'female' ? 'female' : 'male';
    const displayMatches = randomMatches.length > 0 ? randomMatches : [];

    const dynamicHiddenPhotos = genderFolder === 'male'
      ? ["censored-f-1.jpg", "censored-f-2.jpg", "censored-f-3.jpg", "censored-f-4.jpg"].map(f => `/images/male/tinder/censored/${f}`)
      : ["censored-h-1.jpg", "censored-h-2.jpg", "censored-h-3.jpg", "censored-h-4.jpg"].map(f => `/images/female/tinder/censored/${f}`);

    return (
      <div className="flex flex-col items-center w-full max-w-[440px] mx-auto space-y-5 animate-fade-in pb-32 pt-6 px-4">

        {/* 1. POSITIVE MATCH ALERT - ROSE SOLID */}
        <div className="w-full bg-[#f43f5e] text-white p-4 rounded-[1.25rem] shadow-lg flex items-center gap-4 border border-rose-400/30">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6 animate-bounce" />
          </div>
          <div>
            <h1 className="font-black text-sm uppercase tracking-wider leading-none mb-1">POSITIVE MATCH FOUND</h1>
            <p className="text-[11px] text-rose-100 font-medium">Target is currently <span className="underline font-black">ONLINE</span> in Unknown Location.</p>
          </div>
        </div>

        {/* 2. DATA LOCKING ALERT - ORANGE DARK */}
        <div className="w-full bg-[#7c2d12]/20 border border-orange-600/40 p-4 rounded-[1.25rem] flex items-start gap-4 relative overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-600"></div>
          <Activity className="w-5 h-5 text-orange-500 animate-pulse mt-0.5 shrink-0" />
          <div>
            <h3 className="text-[11px] font-black text-orange-400 uppercase tracking-widest mb-1">DATA LOCKING IMMINENT</h3>
            <p className="text-[10px] text-orange-200/70 leading-relaxed font-medium">
              To guarantee their anonymity, these intercepted messages will be <strong>permanently encrypted</strong> in <span className="font-mono text-white font-bold">{formatTime(timeLeft)} min</span>.
            </p>
          </div>
        </div>

        {/* 3. STATS GRID - COMPACT PILLS */}
        <div className="w-full grid grid-cols-4 gap-2">
          {[
            { v: 6, l: 'Matches', c: 'text-rose-500' },
            { v: 30, l: 'Likes', c: 'text-rose-500' },
            { v: 'Active', l: 'Status', c: 'text-emerald-500' },
            { v: '18h', l: 'Last Seen', c: 'text-white' }
          ].map((s, i) => (
            <div key={i} className="bg-[#0f172a] p-2 py-3 rounded-xl border border-slate-800 text-center shadow-md">
              <p className={`text-lg font-black leading-none mb-1 ${s.c}`}>{s.v}</p>
              <p className="text-[8px] text-slate-500 uppercase font-black tracking-widest">{s.l}</p>
            </div>
          ))}
        </div>

        {/* 4. RECENT MATCHES - CLEAN LIST */}
        <div className="w-full bg-[#0f172a] rounded-[1.25rem] border border-slate-800 overflow-hidden shadow-lg">
          <div className="bg-slate-800/40 p-3.5 px-4 border-b border-slate-800 flex justify-between items-center">
            <span className="text-[11px] font-black text-slate-300 uppercase tracking-[0.15em] flex items-center gap-2">
              <HeartCrack className="w-3.5 h-3.5 text-rose-500" /> RECENT MATCHES
            </span>
            <span className="bg-rose-500 text-white text-[9px] px-2 py-0.5 rounded-full font-black tracking-tighter">3 NEW</span>
          </div>
          <div className="divide-y divide-slate-800/50">
            {displayMatches.slice(0, 3).map((m, i) => (
              <div
                key={i}
                className="p-4 flex items-center gap-4 hover:bg-slate-800/30 cursor-pointer transition-colors"
                onClick={() => setSelectedMatch(m)}
              >
                <div className="relative shrink-0">
                  <img src={m.avatar} className="w-11 h-11 rounded-full object-cover border-2 border-slate-700" />
                  <div className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0f172a]"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <p className="text-sm font-black text-white truncate">{m.name}, {m.age}</p>
                    <p className="text-[10px] text-slate-500 font-bold whitespace-nowrap">Online</p>
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium font-mono truncate uppercase tracking-tighter">Within {m.distance} • {m.identity}</p>
                </div>
                <div className="bg-slate-800/50 p-1.5 rounded-lg">
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. RECENT CHATS - PULSING INDICATORS */}
        <div className="w-full bg-[#0f172a] rounded-[1.25rem] border border-slate-800 overflow-hidden shadow-lg">
          <div className="bg-slate-800/40 p-3.5 px-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-3.5 h-3.5 text-blue-400" />
              <h3 className="text-[11px] font-black text-white uppercase tracking-[0.15em]">RECENT CHATS</h3>
            </div>
          </div>
          <div className="p-3.5 bg-slate-900/40 border-b border-slate-800 text-[10px] text-slate-500 font-medium px-4">
            Tap on a conversation to read their messages
          </div>

          <div className="divide-y divide-slate-800/50">
            {displayMatches.slice(3, 6).map((match, i) => (
              <div
                key={i}
                onClick={scrollToCheckout}
                className="p-4 hover:bg-slate-800/30 cursor-pointer transition-colors flex items-center gap-4 group"
              >
                <div className="relative shrink-0">
                  <img src={match.avatar} className="w-11 h-11 rounded-full object-cover border-2 border-slate-700 group-hover:border-blue-500/40" />
                  <div className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0f172a]"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <h4 className="text-sm font-black text-white truncate">{match.name}, {match.age}</h4>
                    <span className="text-[9px] text-slate-500 font-bold font-mono">JUST NOW</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(59,130,246,0.8)]"></span>
                    <p className="text-[10px] text-blue-400 font-bold uppercase tracking-tight">Click to read messages...</p>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                   <ChevronRight className="w-4 h-4 text-blue-400/50" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. SUSPICIOUS LOCATIONS - MAP PULSE */}
        <div className="w-full bg-[#030712] rounded-[1.25rem] border border-slate-800 overflow-hidden shadow-2xl">
          <div className="bg-slate-800/40 p-3.5 px-4 border-b border-slate-800 flex justify-between items-center">
            <span className="text-[11px] font-black text-slate-300 uppercase tracking-[0.15em] flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-rose-500" /> SUSPICIOUS LOCATIONS
            </span>
            <span className="text-[10px] text-rose-500 font-black animate-pulse uppercase tracking-tighter">Live Tracking</span>
          </div>

          <div className="relative h-48 bg-slate-900 overflow-hidden group cursor-pointer" onClick={scrollToCheckout}>
            <iframe
              title="Map"
              src={`https://maps.google.com/maps?q=motel+near+${encodeURIComponent(location)}&output=embed&z=13`}
              className="w-full h-full grayscale invert opacity-40 group-hover:opacity-60 transition-opacity"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative">
                <div className="absolute inset-0 bg-rose-500 rounded-full animate-ping opacity-20 scale-[4]"></div>
                <div className="absolute inset-0 bg-rose-500 rounded-full animate-pulse opacity-40 scale-[2]"></div>
                <div className="w-4 h-4 bg-rose-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#0f172a] border-t border-slate-800/50">
             <div className="bg-rose-500/10 border border-rose-500/20 p-3 rounded-xl mb-3">
               <p className="text-[10px] text-center text-slate-300 font-medium">
                 <span className="font-black text-rose-500">3 SUSPICIOUS ACTIVITIES</span> DETECTED NEAR <span className="text-white font-black uppercase">{location}</span>
               </p>
             </div>
             <div className="space-y-2">
                {[
                  { t: '14:22 PM', l: 'Motel Check-in Zone', d: '0.4 mi' },
                  { t: 'Yesterday', l: 'Private Shared Location', d: '1.2 mi' }
                ].map((loc, i) => (
                  <div key={i} className="flex justify-between items-center bg-slate-900/50 p-3 rounded-xl border border-slate-800/50">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-slate-500 font-black uppercase tracking-tighter">{loc.t}</span>
                      <span className="text-xs text-white font-bold">{loc.l}</span>
                    </div>
                    <span className="text-[10px] text-rose-500 font-black font-mono">{loc.d}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* 7. PRIVATE PHOTOS - BLURRED GRID */}
        <div className="w-full bg-[#0f172a] rounded-[1.25rem] border border-slate-800 overflow-hidden shadow-lg">
          <div className="bg-slate-800/40 p-3.5 px-4 border-b border-slate-800 flex justify-between items-center">
            <span className="text-[11px] font-black text-slate-300 uppercase tracking-[0.15em] flex items-center gap-2">
              <History className="w-3.5 h-3.5 text-rose-500" /> PRIVATE PHOTOS (27)
            </span>
            <Lock className="w-3 h-3 text-slate-500" />
          </div>

          <div className="grid grid-cols-3 gap-1 p-1 bg-black/40">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="relative aspect-square bg-slate-800 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=200&q=10`}
                  className="w-full h-full object-cover blur-md opacity-30"
                  alt="Private"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-white/10" />
                </div>
                {i === 5 && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="text-[10px] text-white font-black tracking-tighter uppercase">+21 MORE</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={scrollToCheckout}
            className="w-full p-4 border-t border-slate-800 bg-slate-900/20 hover:bg-rose-500/5 text-[10px] font-black text-rose-500 uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-3 group"
          >
            Decrypt All Hidden Photos <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 8. UNLOCK WIDGET - PRECISE ANCHORING */}
        <div ref={checkoutRef} className="w-full bg-[#0f172a] border-2 border-slate-800 rounded-[1.5rem] p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center mb-4 border border-rose-500/20">
              <Lock className="w-6 h-6 text-rose-500" />
            </div>
            <h2 className="text-xl font-black text-white uppercase tracking-tighter italic">Unlock Evidence Dossier</h2>
            <p className="text-[10px] text-slate-500 font-medium max-w-[280px] mt-2">Get instant access to all deleted conversations, location history, and hidden photos.</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 mb-6">
            {/* PRICE ANCHORING RIGHT-ALIGNED */}
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                 <span className="bg-rose-500/10 border border-rose-500/20 text-rose-500 text-[9px] px-2 py-0.5 rounded-full font-black tracking-wider uppercase inline-block self-start">High Priority</span>
                 <p className="text-[9px] text-slate-500 font-medium mt-2">Link created for: {location}</p>
              </div>

              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-1.5 mb-1">
                   <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
                   <span className="text-xl font-mono font-black text-rose-500 tracking-tighter">{formatTime(timeLeft)}</span>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-slate-500 line-through font-bold leading-none mb-1">Regular $149</p>
                  <p className="text-3xl font-black text-emerald-400 leading-none">Today: $37</p>
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://pay.mycheckoutt.com/0198c1be-98b4-7315-a3bc-8c0fa9120e5c?ref="
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-[#030712] font-black py-4 rounded-xl shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-3 uppercase tracking-[0.15em] text-xs"
          >
            Unlock Now <ChevronRight className="w-4 h-4" />
          </a>

          <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-slate-900/50 opacity-40">
             <span className="flex items-center gap-1.5 text-[9px] font-black text-slate-400 uppercase"><Lock className="w-3 h-3" /> SSL Secure</span>
             <span className="flex items-center gap-1.5 text-[9px] font-black text-slate-400 uppercase"><ShieldCheck className="w-3 h-3" /> Guaranteed</span>
          </div>
        </div>

        {/* 9. TESTIMONIALS - VIDEO + TEXT SIDE-BY-SIDE */}
        <div className="w-full py-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">WHAT THEY DISCOVERED</h2>
            <p className="text-[11px] text-slate-500 font-bold mt-2 uppercase tracking-widest">Real stories from real users</p>
          </div>

          <div className="relative max-w-[440px] mx-auto group">
            {/* Arrows */}
            <button 
              onClick={() => setTestimonialIndex(prev => (prev > 0 ? prev - 1 : testimonials.length - 1))}
              className="absolute -left-4 top-[40%] z-20 w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white hover:bg-slate-800 shadow-xl transition-all active:scale-90"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => setTestimonialIndex(prev => (prev < testimonials.length - 1 ? prev + 1 : 0))}
              className="absolute -right-4 top-[40%] z-20 w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white hover:bg-slate-800 shadow-xl transition-all active:scale-90"
            >
              <ChevronRight size={20} />
            </button>

            <div className="overflow-hidden rounded-[2rem]">
               <div 
                 className="flex transition-transform duration-700 ease-in-out"
                 style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}
               >
                 {testimonials.map((t, i) => (
                   <div key={i} className="min-w-full p-2">
                     <div className="bg-[#0f172a] border border-slate-800 rounded-[1.75rem] overflow-hidden shadow-2xl">
                        {/* Video */}
                        <div className="aspect-[4/5] bg-black relative group/vid">
                           <iframe 
                             src={t.video}
                             className="w-full h-full object-cover pointer-events-none"
                             allow="autoplay"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                              <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                    <Volume2 size={16} className="text-white" />
                                 </div>
                                 <div>
                                    <p className="text-white font-black text-sm uppercase tracking-tighter">{t.name}</p>
                                    <p className="text-[10px] text-slate-400 font-bold">Verified Result</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        {/* Quote Text */}
                        <div className="p-6 bg-slate-900/40">
                           <p className="text-slate-300 text-xs italic font-medium leading-relaxed">
                             "{t.text}"
                           </p>
                        </div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
               {testimonials.map((_, i) => (
                 <button 
                   key={i}
                   onClick={() => setTestimonialIndex(i)}
                   className={`h-1.5 rounded-full transition-all duration-300 ${testimonialIndex === i ? 'bg-emerald-500 w-6' : 'bg-slate-800 w-1.5'}`}
                 />
               ))}
            </div>
          </div>
        </div>

        {/* 10. FAQ SECTION - BORDERED & COMPACT */}
        <div className="w-full bg-[#0a0f1e] border-2 border-slate-800 rounded-[2rem] p-8 md:p-10 mb-12 shadow-2xl">
          <h2 className="text-xl font-black text-white uppercase italic tracking-tighter text-center mb-8">FREQUENTLY ASKED</h2>
          
          <div className="space-y-4">
             {[
               { q: 'Is this 100% Anonymous?', a: 'Completely. There is no trace that you accessed this dossier. We don\'t notify them or need any special device access.' },
               { q: 'What if I find nothing?', a: 'If the report comes back clean, you enjoy the peace of mind you deserve. You are covered by our 7-Day Guarantee.' },
               { q: 'How long does it take?', a: 'Access is instant. Once unlocked, the dossier is available for download immediately.' }
             ].map((f, i) => (
               <div key={i} className="bg-slate-900/30 border border-slate-800 p-5 rounded-2xl">
                 <h4 className="text-sm font-black text-white italic mb-2">Q: {f.q}</h4>
                 <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{f.a}</p>
               </div>
             ))}
          </div>

          <button
            onClick={scrollToCheckout}
            className="w-full mt-10 bg-emerald-500 text-[#030712] font-black py-5 rounded-xl uppercase tracking-widest text-xs shadow-[0_0_30px_rgba(16,185,129,0.2)]"
          >
            SECURE MY ACCESS NOW
          </button>
        </div>
      </div>
    )
  }

  // --------------------------------------------------------
  // MATCH DETAILS MODAL (DARK)
  // --------------------------------------------------------
  const renderMatchModal = () => {
    if (!selectedMatch) return null;
    return (
      <div
        className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60] p-4 backdrop-blur-sm animate-in fade-in"
        onClick={() => setSelectedMatch(null)}
      >
        <div className="bg-[#0f172a] rounded-2xl w-full max-w-sm max-h-[90vh] overflow-y-auto relative border border-slate-700 shadow-2xl" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setSelectedMatch(null)} aria-label="Close modal" className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 z-10 transition-colors">
            <X className="w-5 h-5" />
          </button>

          <div className="relative h-80">
            <img src={selectedMatch.avatar} alt="Full match profile" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <h1 className="text-3xl font-bold text-white flex items-center gap-2">
                {selectedMatch.name}, {selectedMatch.age}
                {selectedMatch.verified && <CheckCircle2 className="text-blue-500 w-6 h-6 fill-white" />}
              </h1>
              <div className="flex gap-2 mt-1">
                <span className="bg-slate-800/80 backdrop-blur px-2 py-0.5 rounded text-[10px] text-white font-bold uppercase">{selectedMatch.identity}</span>
                <span className="bg-slate-800/80 backdrop-blur px-2 py-0.5 rounded text-[10px] text-white font-bold uppercase">{selectedMatch.distance} away</span>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Bio</h2>
              <p className="text-slate-300 text-sm leading-relaxed">"{selectedMatch.bio}"</p>
            </div>

            <div>
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Interests</h2>
              <div className="flex flex-wrap gap-2">
                {selectedMatch.interests.map((int: string, i: number) => (
                  <span key={i} className="bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs font-medium">{int}</span>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                scrollToCheckout()
                setSelectedMatch(null)
              }}
              className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold py-3 rounded-xl shadow-lg uppercase tracking-wide text-sm"
            >
              View Full Profile
            </button>
          </div>
        </div>
      </div>
    )
  }

  // --------------------------------------------------------
  // MAIN RENDER
  // --------------------------------------------------------
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#0B1120] font-sans selection:bg-cyan-500/30">
      {/* PERFORMANCE PRELOAD */}
      <link rel="preconnect" href="https://play.tynk.ai" />
      <link rel="dns-prefetch" href="https://play.tynk.ai" />
      <link rel="prerender" href="https://play.tynk.ai/p/55c0525d-8354-4cd6-a98f-34a31df5b1aa" />
      
      <main className="w-full h-full flex-grow">
        {step === 1 && renderInputStep()}
        {step === 2 && renderLoadingStep()}
        {step === 3 && renderResultsStep()}
      </main>

      {step !== 2 && (
        <footer className="py-6 text-center border-t border-slate-800 w-full mt-auto">
          <p className="text-[10px] text-slate-600 uppercase tracking-widest">© 2026 Digital Truth Check. All rights reserved.</p>
        </footer>
      )}

      {renderMatchModal()}
    </div>
  )
}

export default function DatingScanner() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center p-4"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
      <DatingScannerContent />
    </Suspense>
  )
}
