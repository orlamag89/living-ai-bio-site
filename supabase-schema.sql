-- Create vendors table
CREATE TABLE vendors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  category VARCHAR(100) NOT NULL,
  ig_handle VARCHAR(100),
  tiktok_handle VARCHAR(100),
  paypal_email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create beta_signups table
CREATE TABLE beta_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255),
  phone VARCHAR(20),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_vendors_name ON vendors(name);
CREATE INDEX idx_vendors_category ON vendors(category);
CREATE INDEX idx_beta_signups_email ON beta_signups(email);

-- Enable Row Level Security (RLS)
ALTER TABLE vendors ENABLE ROW LEVEL SECURITY;
ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

-- Create policies for vendors table
CREATE POLICY "Vendors are viewable by everyone" ON vendors
  FOR SELECT USING (true);

CREATE POLICY "Vendors can be created by authenticated users" ON vendors
  FOR INSERT WITH AUTHENTICATED (true);

CREATE POLICY "Vendors can be updated by owner" ON vendors
  FOR UPDATE USING (auth.uid()::text = id::text);

-- Create policies for beta_signups table
CREATE POLICY "Beta signups can be created by anyone" ON beta_signups
  FOR INSERT WITH AUTHENTICATED (false);

CREATE POLICY "Beta signups can be viewed by authenticated users" ON beta_signups
  FOR SELECT WITH AUTHENTICATED (true);

-- Insert some sample data for testing
INSERT INTO vendors (name, category, ig_handle, tiktok_handle, paypal_email) VALUES
  ('Sarah Photography', 'photography', '@sarahphotography', '@sarahphotography', 'sarah@example.com'),
  ('Mike Design Studio', 'design', '@mikedesign', '@mikedesign', 'mike@example.com'),
  ('Fitness with Jen', 'fitness', '@fitnesswithjen', '@fitnesswithjen', 'jen@example.com');
