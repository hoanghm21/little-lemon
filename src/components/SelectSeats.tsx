import React, { useState } from 'react';
import styled from 'styled-components';
import NavigationButton from './NavigationButton';
import { Container } from './SharedStyles';

const Canvas = styled.div`
  background-color: #fff; /* White canvas for the layout */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  width: 100%; /* Full width of the container */
  max-width: 600px; /* Limit the maximum width */
  margin: 20px auto; /* Center the canvas */
`;

const Legend = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Space between the color box and text */
  margin-right: 20px; /* Add space between legend items */
`;

const ColorBox = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border: 1px solid #000;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Space buttons to opposite corners */
  margin-top: 40px; /* Add spacing above the buttons */
  width: 100%; /* Ensure buttons span the full width */
  padding: 0 20px; /* Add padding to align buttons with the canvas */
`;

const Title = styled.h2`
  font-family: 'Markazi Text', serif;
  font-size: 36px;
  color: #495E57; /* Title font color */
  text-align: center;
  margin-bottom: 10px; /* Add spacing between title and canvas */
`;

interface Table {
  id: number;
  x: number;
  y: number;
  type: 'balcony' | 'booth' | 'bar' | 'smoking' | 'regular';
  reserved: boolean;
  seats: number;
}

interface SelectSeatsProps {
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  updateFormData: (newData: Partial<{ table: string }>) => void; // Add updateFormData prop
  formData: { table?: string }; // Add formData as a prop
}

const SelectSeats: React.FC<SelectSeatsProps> = ({
  goToNextStep,
  goToPreviousStep,
  updateFormData,
  formData, // Add formData as a prop
}) => {
  const [tables, setTables] = useState<Table[]>([
    // Balcony tables
    { id: 1, x: 50, y: 100, type: 'balcony', reserved: false, seats: 2 },
    { id: 2, x: 50, y: 150, type: 'balcony', reserved: false, seats: 2 },
    { id: 3, x: 50, y: 200, type: 'balcony', reserved: false, seats: 2 },
    { id: 4, x: 50, y: 250, type: 'balcony', reserved: false, seats: 2 },
    { id: 5, x: 50, y: 300, type: 'balcony', reserved: false, seats: 4 },

    // Bar seats
    { id: 6, x: 220, y: 50, type: 'bar', reserved: false, seats: 1 },
    { id: 7, x: 250, y: 50, type: 'bar', reserved: false, seats: 1 },
    { id: 8, x: 280, y: 50, type: 'bar', reserved: false, seats: 1 },
    { id: 9, x: 310, y: 50, type: 'bar', reserved: false, seats: 1 },
    { id: 10, x: 340, y: 50, type: 'bar', reserved: false, seats: 1 },
    { id: 11, x: 370, y: 50, type: 'bar', reserved: false, seats: 1 },

    // Booths
    { id: 12, x: 190, y: 100, type: 'booth', reserved: false, seats: 6 },
    { id: 13, x: 190, y: 150, type: 'booth', reserved: false, seats: 4 },
    { id: 14, x: 190, y: 200, type: 'booth', reserved: false, seats: 4 },
    { id: 15, x: 190, y: 250, type: 'booth', reserved: false, seats: 4 },

    // Regular tables
    { id: 16, x: 350, y: 100, type: 'regular', reserved: false, seats: 2 },
    { id: 17, x: 350, y: 150, type: 'regular', reserved: false, seats: 2 },
    { id: 18, x: 350, y: 200, type: 'regular', reserved: false, seats: 2 },
    { id: 19, x: 350, y: 250, type: 'regular', reserved: false, seats: 2 },
    { id: 20, x: 350, y: 300, type: 'regular', reserved: false, seats: 2 },

    // Smoking tables
    { id: 21, x: 450, y: 100, type: 'smoking', reserved: false, seats: 2 },
    { id: 22, x: 450, y: 150, type: 'smoking', reserved: false, seats: 2 },
    { id: 23, x: 450, y: 200, type: 'smoking', reserved: false, seats: 2 },
    { id: 24, x: 450, y: 250, type: 'smoking', reserved: false, seats: 2 },
    { id: 25, x: 450, y: 300, type: 'smoking', reserved: false, seats: 2 },
  ]);
  const [hoveredTable, setHoveredTable] = useState<number | null>(null);

  const handleTableClick = (tableId: number) => {
    const table = tables.find((t) => t.id === tableId);
    if (table && !table.reserved) {
      updateFormData({ table: `Table ${tableId}` }); // Save the selected table in formData
      alert(`You chose the ${table.type} table ${tableId}.`);
    }
  };

  const getTableColor = (table: Table) => {
    const selectedTableId = formData.table ? parseInt(formData.table.split(' ')[1]) : null;
    if (selectedTableId === table.id) {
      return table.type === 'balcony'
        ? '#388E3C'
        : table.type === 'bar'
        ? '#7B1FA2'
        : table.type === 'booth'
        ? '#1976D2'
        : table.type === 'regular'
        ? '#FFA000'
        : '#E64A19';
    } else if (hoveredTable === table.id) {
      return table.type === 'balcony'
        ? '#66BB6A'
        : table.type === 'bar'
        ? '#AB47BC'
        : table.type === 'booth'
        ? '#42A5F5'
        : table.type === 'regular'
        ? '#FFD54F'
        : '#FF7043';
    } else {
      return table.type === 'balcony'
        ? '#4CAF50'
        : table.type === 'bar'
        ? '#9C27B0'
        : table.type === 'booth'
        ? '#2196F3'
        : table.type === 'regular'
        ? '#FFC107'
        : '#FF5722';
    }
  };

  return (
    <Container>
      <Title>Choose Your Table</Title>
      <Canvas>
        <svg width="100%" height="400px" viewBox="0 0 500 400">
          {/* Draw the door */}
          <rect x={(500 - 100) / 2} y="360" width="100" height="20" fill="#795548" />
          <text x={500 / 2} y="355" fontSize="14" fill="#000" textAnchor="middle">
            Door
          </text>

          {/* Draw the bar */}
          <rect x="200" y="20" width="200" height="20" fill="#9C27B0" />
          <text x="300" y="15" fontSize="14" fill="#000" textAnchor="middle">
            Bar
          </text>

          {/* Draw the balcony tables */}
          {tables
            .filter((table) => table.type === 'balcony')
            .map((table) => (
              <circle
                key={table.id}
                cx={table.x}
                cy={table.y}
                r={table.seats === 2 ? 15 : 20}
                fill={getTableColor(table)}
                stroke="#000"
                strokeWidth="2"
                style={{ cursor: 'pointer' }}
                onClick={() => handleTableClick(table.id)}
                onMouseEnter={() => setHoveredTable(table.id)}
                onMouseLeave={() => setHoveredTable(null)}
              />
            ))}

          {/* Draw the bar seats */}
          {tables
            .filter((table) => table.type === 'bar')
            .map((table) => (
              <circle
                key={table.id}
                cx={table.x}
                cy={table.y}
                r={10}
                fill={getTableColor(table)}
                stroke="#000"
                strokeWidth="2"
                style={{ cursor: 'pointer' }}
                onClick={() => handleTableClick(table.id)}
                onMouseEnter={() => setHoveredTable(table.id)}
                onMouseLeave={() => setHoveredTable(null)}
              />
            ))}

          {/* Draw the booths */}
          {tables
            .filter((table) => table.type === 'booth')
            .map((table) => (
              <rect
                key={table.id}
                x={table.x}
                y={table.y}
                width={table.seats === 6 ? 60 : 50}
                height="30"
                rx="10"
                ry="10"
                fill={getTableColor(table)}
                stroke="#000"
                strokeWidth="2"
                style={{ cursor: 'pointer' }}
                onClick={() => handleTableClick(table.id)}
                onMouseEnter={() => setHoveredTable(table.id)}
                onMouseLeave={() => setHoveredTable(null)}
              />
            ))}

          {/* Draw the regular tables */}
          {tables
            .filter((table) => table.type === 'regular')
            .map((table) => (
              <circle
                key={table.id}
                cx={table.x}
                cy={table.y}
                r={15}
                fill={getTableColor(table)}
                stroke="#000"
                strokeWidth="2"
                style={{ cursor: 'pointer' }}
                onClick={() => handleTableClick(table.id)}
                onMouseEnter={() => setHoveredTable(table.id)}
                onMouseLeave={() => setHoveredTable(null)}
              />
            ))}

          {/* Draw the divider */}
          <rect x="400" y="80" width="5" height="250" fill="#000" />

          {/* Draw the smoking tables */}
          {tables
            .filter((table) => table.type === 'smoking')
            .map((table) => (
              <circle
                key={table.id}
                cx={table.x}
                cy={table.y}
                r={15}
                fill={getTableColor(table)}
                stroke="#000"
                strokeWidth="2"
                style={{ cursor: 'pointer' }}
                onClick={() => handleTableClick(table.id)}
                onMouseEnter={() => setHoveredTable(table.id)}
                onMouseLeave={() => setHoveredTable(null)}
              />
            ))}
        </svg>
      </Canvas>
      <Legend>
        <LegendItem>
          <ColorBox color="#4CAF50" /> Balcony
        </LegendItem>
        <LegendItem>
          <ColorBox color="#2196F3" /> Booth
        </LegendItem>
        <LegendItem>
          <ColorBox color="#9C27B0" /> Bar
        </LegendItem>
        <LegendItem>
          <ColorBox color="#FFC107" /> Regular
        </LegendItem>
        <LegendItem>
          <ColorBox color="#FF5722" /> Smoking
        </LegendItem>
        <LegendItem>
          <ColorBox color="#ccc" /> Reserved
        </LegendItem>
      </Legend>
      <ButtonContainer>
        <NavigationButton label="Back" onClick={goToPreviousStep} variant="back" />
        <NavigationButton
          label="Next"
          onClick={() => {
            if (formData.table) {
              goToNextStep();
            } else {
              alert('Please choose a table before proceeding.');
            }
          }}
          variant="next"
        />
      </ButtonContainer>
    </Container>
  );
};

export default SelectSeats;