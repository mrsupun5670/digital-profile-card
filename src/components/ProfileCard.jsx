import { 
  FaFacebook, 
  FaInstagram,
  FaTiktok, 
  FaYoutube,
  FaHeart,
  FaComment,
  FaShare,
  FaStar,
  FaEnvelope
} from 'react-icons/fa';
import { profileData } from '../data/profileData';

const ProfileCard = () => {
  const socialIcons = {
    facebook: FaFacebook,
    instagram: FaInstagram,
    youtube: FaYoutube,
    tiktok: FaTiktok,
  };

  return (
    <div className="relative w-full min-h-screen overflow-auto bg-black">
      {/* Full-Screen Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${profileData.backgroundImage})`,
        }}
      >
        {/* Dark Overlay with Blur */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 py-12">
        {/* Glass Card */}
        <div className="glass-card-premium w-full max-w-2xl p-8 md:p-12 space-y-8 animate-fadeIn">
          
          {/* Profile Section */}
          <div className="text-center space-y-4">
            {/* Avatar with Glow */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-40 animate-pulse" />
              <img 
                src={profileData.avatar}
                alt={profileData.name}
                className="relative w-32 h-32 rounded-full border-4 border-white/20 shadow-2xl"
              />
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900" />
            </div>

            {/* Name & Username */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                {profileData.name}
              </h1>
              <p className="text-lg text-gray-400">{profileData.username}</p>
            </div>

            {/* Bio */}
            <p className="text-gray-300 leading-relaxed max-w-lg mx-auto text-sm md:text-base">
              {profileData.bio}
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4">
            <div className="stat-card">
              <div className="text-3xl font-bold text-gradient">{profileData.stats.followers}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Followers</div>
            </div>
            <div className="stat-card">
              <div className="text-3xl font-bold text-gradient">{profileData.stats.following}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Following</div>
            </div>
            <div className="stat-card">
              <div className="text-3xl font-bold text-gradient">{profileData.stats.creations}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Creations</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a
              href={`mailto:${profileData.email}`}
              className="btn-gradient flex-1 py-3 px-6 rounded-full font-semibold text-white
                       shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300
                       flex items-center justify-center gap-2"
            >
              <FaEnvelope /> Contact Me
            </a>
          </div>

          {/* Social Action Icons */}
          <div className="flex justify-center gap-4">
            {Object.entries(profileData.social).map(([platform, url]) => {
              const Icon = socialIcons[platform];
              if (!url || !Icon) return null;
              
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-premium"
                  aria-label={platform}
                >
                  <Icon className="text-xl" />
                </a>
              );
            })}
            <button className="social-icon-premium" aria-label="Like">
              <FaHeart className="text-xl" />
            </button>
            <button className="social-icon-premium" aria-label="Share">
              <FaShare className="text-xl" />
            </button>
          </div>

          {/* Horizontal Gallery */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Recent Work</h3>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {profileData.gallery.map((image, index) => (
                <div 
                  key={index}
                  className="gallery-item flex-shrink-0 w-32 h-32 rounded-2xl overflow-hidden
                           border border-white/10 hover:border-white/30 transition-all duration-300
                           hover:scale-105 cursor-pointer"
                >
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
              <FaStar className="text-yellow-500" /> Testimonials
            </h3>
            <div className="space-y-3">
              {profileData.testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="testimonial-card p-4 rounded-2xl bg-white/5 border border-white/10
                           hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full border-2 border-white/20"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-white text-sm">{testimonial.name}</span>
                        <span className="text-xs text-gray-500">• {testimonial.role}</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{testimonial.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 justify-center">
            {profileData.skills.map((skill, index) => (
              <span 
                key={index}
                className="skill-tag px-4 py-1.5 rounded-full bg-white/10 border border-white/20 
                         text-gray-300 text-xs font-medium hover:bg-white/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
