
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>NTSSendOption complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType name="NTSSendOption"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="TaxationOption" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="TaxationAddTaxAllowYN" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="TaxExemptionOption" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="TaxExemptionAddTaxAllowYN" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "NTSSendOption", propOrder = {
    "taxationOption",
    "taxationAddTaxAllowYN",
    "taxExemptionOption",
    "taxExemptionAddTaxAllowYN"
})
public class NTSSendOption {

    @XmlElement(name = "TaxationOption")
    protected int taxationOption;
    @XmlElement(name = "TaxationAddTaxAllowYN")
    protected int taxationAddTaxAllowYN;
    @XmlElement(name = "TaxExemptionOption")
    protected int taxExemptionOption;
    @XmlElement(name = "TaxExemptionAddTaxAllowYN")
    protected int taxExemptionAddTaxAllowYN;

    /**
     * taxationOption �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getTaxationOption() {
        return taxationOption;
    }

    /**
     * taxationOption �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setTaxationOption(int value) {
        this.taxationOption = value;
    }

    /**
     * taxationAddTaxAllowYN �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getTaxationAddTaxAllowYN() {
        return taxationAddTaxAllowYN;
    }

    /**
     * taxationAddTaxAllowYN �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setTaxationAddTaxAllowYN(int value) {
        this.taxationAddTaxAllowYN = value;
    }

    /**
     * taxExemptionOption �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getTaxExemptionOption() {
        return taxExemptionOption;
    }

    /**
     * taxExemptionOption �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setTaxExemptionOption(int value) {
        this.taxExemptionOption = value;
    }

    /**
     * taxExemptionAddTaxAllowYN �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getTaxExemptionAddTaxAllowYN() {
        return taxExemptionAddTaxAllowYN;
    }

    /**
     * taxExemptionAddTaxAllowYN �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setTaxExemptionAddTaxAllowYN(int value) {
        this.taxExemptionAddTaxAllowYN = value;
    }

}
