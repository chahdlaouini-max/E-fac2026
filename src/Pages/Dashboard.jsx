import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    client: '',
    produit: '',
    quantite: '',
    prix: '',
    hajaZeyda: '',
    jour: '',
    mois: '',
    anne: ''
  });
  const [activeMenuItem, setActiveMenuItem] = useState('Facture');

  const menuItems = [
    { id: 'facture', label: 'Facture' },
    { id: 'modify-login', label: 'Modify Login' },
    { id: 'profile', label: 'Profile' },
    { id: 'logout', label: 'Logout' },
    { id: 'parametres', label: 'Parametres' }
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    { value: '1', label: 'Janvier' },
    { value: '2', label: 'Février' },
    { value: '3', label: 'Mars' },
    { value: '4', label: 'Avril' },
    { value: '5', label: 'Mai' },
    { value: '6', label: 'Juin' },
    { value: '7', label: 'Juillet' },
    { value: '8', label: 'Août' },
    { value: '9', label: 'Septembre' },
    { value: '10', label: 'Octobre' },
    { value: '11', label: 'Novembre' },
    { value: '12', label: 'Décembre' }
  ];
  const years = ['2024', '2025', '2026', '2027', '2028'];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.client || !formData.produit || !formData.quantite || !formData.prix || 
        !formData.jour || !formData.mois || !formData.anne) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    
    alert('Formulaire envoyé avec succès!');
    console.log('Form data:', formData);
    
    setFormData({
      client: '',
      produit: '',
      quantite: '',
      prix: '',
      hajaZeyda: '',
      jour: '',
      mois: '',
      anne: ''
    });
  };

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item);
    setSidebarOpen(false);
  };

  return (
    <div className="dashboard">
      <button 
        className="hamburger" 
        onClick={toggleSidebar}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
      
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar} />
      )}

      <div className="main-container">
        <div className="content-wrapper">
          <aside className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
            <div className="sidebar-content">
              <img 
                src="Image1.jpg" 
                alt="Tunisair Express Logo" 
                className="sidebar-logo" 
              />
              
              <h1 className="company-title">Tunisair Express</h1>
              <p className="company-email">TunisairExpress@gmail.com</p>
              
              <nav className="sidebar-menu">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    className={`menu-item ${activeMenuItem === item.label ? 'active' : ''}`}
                    onClick={() => handleMenuItemClick(item.label)}
                  >
                    <span className="menu-text">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <section className="form-container">
            <div className="form-content">
              <h2 className="form-title">Formulaire</h2>
              
              <form className="form-fields" onSubmit={handleSubmit}>
                <div className="field-group">
                  <label htmlFor="client" className="field-label">Client</label>
                  <input 
                    type="text" 
                    id="client" 
                    name="client" 
                    className="field-input" 
                    value={formData.client}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="produit" className="field-label">Produit</label>
                  <input 
                    type="text" 
                    id="produit" 
                    name="produit" 
                    className="field-input" 
                    value={formData.produit}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="quantite" className="field-label">Quantite</label>
                  <input 
                    type="number" 
                    id="quantite" 
                    name="quantite" 
                    className="field-input" 
                    value={formData.quantite}
                    onChange={handleInputChange}
                    min="1" 
                    required 
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="prix" className="field-label">Prix</label>
                  <input 
                    type="number" 
                    id="prix" 
                    name="prix" 
                    className="field-input" 
                    value={formData.prix}
                    onChange={handleInputChange}
                    step="0.01" 
                    min="0" 
                    required 
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="haja-zeyda" className="field-label">Haja zeyda</label>
                  <input 
                    type="text" 
                    id="haja-zeyda" 
                    name="hajaZeyda" 
                    className="field-input" 
                    value={formData.hajaZeyda}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="date-section">
                  <label className="date-label">Date</label>
                  <div className="date-row">
                    <div className="date-column">
                      <label htmlFor="jour" className="date-column-label">Jour</label>
                      <select 
                        id="jour" 
                        name="jour" 
                        className="dropdown-select" 
                        value={formData.jour}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Sélectionner</option>
                        {days.map(day => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>
                    </div>

                    <div className="date-column">
                      <label htmlFor="mois" className="date-column-label">Mois</label>
                      <select 
                        id="mois" 
                        name="mois" 
                        className="dropdown-select" 
                        value={formData.mois}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Sélectionner</option>
                        {months.map(month => (
                          <option key={month.value} value={month.value}>{month.label}</option>
                        ))}
                      </select>
                    </div>

                    <div className="date-column">
                      <label htmlFor="anne" className="date-column-label">Anne</label>
                      <select 
                        id="anne" 
                        name="anne" 
                        className="dropdown-select" 
                        value={formData.anne}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Sélectionner</option>
                        {years.map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <button type="submit" className="submit-button">
                  Envoyer
                </button>
              </form>
            </div>
          </section>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <p className="footer-text">© 2026 Tunisair Express. Tous droits réservés.</p>
            <div className="footer-links">
              <a href="#" className="footer-link">Conditions d'utilisation</a>
              <span className="footer-separator">|</span>
              <a href="#" className="footer-link">Politique de confidentialité</a>
              <span className="footer-separator">|</span>
              <a href="#" className="footer-link">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;