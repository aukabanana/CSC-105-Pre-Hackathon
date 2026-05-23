export type ElectronicType = 
'WATER' | 'LIGHT' | 'AC' | 'FAN' 
| 'TV' | 'SECURITY' | 'ETC';

export interface electronicType {
    id: string;
    name: string;
    watt: number;              
    status: boolean;
    type: ElectronicType;
    location: string;
    
    temp?: number | null;            
    time_usage: number;            
    last_started_at?: string | null; 
    
    is_active: boolean;
    created_at: string;             
    updated_at: string;             
    
    notifications?: Notification[];  
}