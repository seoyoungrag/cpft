
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="ReverseIssueTaxInvoiceResult" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "reverseIssueTaxInvoiceResult"
})
@XmlRootElement(name = "ReverseIssueTaxInvoiceResponse")
public class ReverseIssueTaxInvoiceResponse {

    @XmlElement(name = "ReverseIssueTaxInvoiceResult")
    protected int reverseIssueTaxInvoiceResult;

    /**
     * reverseIssueTaxInvoiceResult �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getReverseIssueTaxInvoiceResult() {
        return reverseIssueTaxInvoiceResult;
    }

    /**
     * reverseIssueTaxInvoiceResult �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setReverseIssueTaxInvoiceResult(int value) {
        this.reverseIssueTaxInvoiceResult = value;
    }

}
