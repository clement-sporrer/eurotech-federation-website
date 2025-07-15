export default function ColorTest() {
  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold text-eurotech-blue mb-4">Test des couleurs EuroTech</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <div className="bg-eurotech-blue text-white p-4 rounded-lg text-center">
          <p className="font-medium">EuroTech Blue</p>
          <p className="text-sm">#123192</p>
        </div>
        
        <div className="bg-eurotech-accent text-white p-4 rounded-lg text-center">
          <p className="font-medium">EuroTech Accent</p>
          <p className="text-sm">#5CBBF6</p>
        </div>
        
        <div className="bg-eurotech-lightblue text-white p-4 rounded-lg text-center">
          <p className="font-medium">EuroTech Lightblue</p>
          <p className="text-sm">#4285F4</p>
        </div>
        
        <div className="bg-eurotech-gray text-eurotech-blue p-4 rounded-lg text-center">
          <p className="font-medium">EuroTech Gray/BG</p>
          <p className="text-sm">#f5f3ed</p>
        </div>
        
        <div className="bg-eurotech-dark text-white p-4 rounded-lg text-center">
          <p className="font-medium">EuroTech Dark</p>
          <p className="text-sm">#0F2557</p>
        </div>
        
        <div className="bg-eurotech-light text-eurotech-blue p-4 rounded-lg text-center">
          <p className="font-medium">EuroTech Light</p>
          <p className="text-sm">#E8F4FD</p>
        </div>
      </div>
      
      <div className="space-y-2 mt-8">
        <h3 className="text-xl font-semibold text-eurotech-blue">Test des hovers :</h3>
        <div className="flex flex-wrap gap-2">
          <button className="bg-eurotech-blue hover:bg-eurotech-dark text-white px-6 py-3 rounded-lg transition-colors">
            Blue → Dark
          </button>
          <button className="bg-white hover:bg-eurotech-accent text-eurotech-blue hover:text-white border border-eurotech-blue px-6 py-3 rounded-lg transition-colors">
            White → Accent
          </button>
          <button className="bg-eurotech-lightblue hover:bg-eurotech-blue text-white px-6 py-3 rounded-lg transition-colors">
            Lightblue → Blue
          </button>
          <button className="bg-eurotech-gray hover:bg-eurotech-light text-eurotech-dark px-6 py-3 rounded-lg transition-colors">
            Gray → Light
          </button>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-eurotech-bg rounded-lg">
        <h3 className="text-lg font-semibold text-eurotech-dark mb-2">Toutes vos couleurs sont maintenant disponibles :</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-eurotech-dark">
          <div>• bg-eurotech-blue</div>
          <div>• bg-eurotech-accent</div>
          <div>• bg-eurotech-lightblue</div>
          <div>• bg-eurotech-gray</div>
          <div>• bg-eurotech-bg</div>
          <div>• bg-eurotech-dark</div>
          <div>• bg-eurotech-light</div>
          <div>• text-eurotech-blue</div>
          <div>• text-eurotech-accent</div>
          <div>• text-eurotech-lightblue</div>
          <div>• text-eurotech-gray</div>
          <div>• text-eurotech-bg</div>
          <div>• text-eurotech-dark</div>
          <div>• text-eurotech-light</div>
          <div>• border-eurotech-blue</div>
          <div>• border-eurotech-accent</div>
          <div>• border-eurotech-lightblue</div>
          <div>• hover:bg-eurotech-*</div>
          <div>• hover:text-eurotech-*</div>
        </div>
      </div>
    </div>
  );
}
